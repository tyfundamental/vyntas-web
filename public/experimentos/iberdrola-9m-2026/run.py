"""Experimento Vyntas: modelos abiertos en local leyendo un informe de resultados.

Antes de empezar:
  1. Instala Ollama (https://ollama.com) y descarga los modelos, por ejemplo:
       ollama pull llama3.2:3b
  2. Copia el texto de las páginas 14-16 y 31-33 del informe de resultados
     enero-septiembre 2026 de Iberdrola (report-269M.pdf, en su web) en un
     archivo llamado informe.txt junto a este script.
  3. Deja preguntas.json en la misma carpeta.

Uso: python run.py llama3.2:3b gemma3:4b qwen3.5:4b
Guarda resultados/<modelo>.json con cada respuesta, su tiempo y la velocidad.
Necesita Python 3.9 o superior; no usa librerías externas.
"""
import json
import pathlib
import sys
import time
import urllib.request

BASE = pathlib.Path(__file__).parent
DOC = (BASE / "informe.txt").read_text(encoding="utf-8")
PREGUNTAS = json.loads((BASE / "preguntas.json").read_text(encoding="utf-8"))
OUT = BASE / "resultados"
OUT.mkdir(exist_ok=True)

SYSTEM = (
    "Responde en español, de forma breve, basándote en este informe de resultados de Iberdrola.\n\n"
    "<informe>\n" + DOC + "\n</informe>"
)


def chat(model: str, question: str) -> dict:
    body = {
        "model": model,
        "stream": False,
        "think": False,
        "messages": [
            {"role": "system", "content": SYSTEM},
            {"role": "user", "content": question},
        ],
        "options": {"temperature": 0, "seed": 1, "num_ctx": 12288, "num_predict": 400},
    }
    req = urllib.request.Request(
        "http://localhost:11434/api/chat",
        data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json"},
    )
    t0 = time.time()
    with urllib.request.urlopen(req, timeout=3600) as r:
        data = json.loads(r.read())
    data["wall_s"] = time.time() - t0
    return data


def main() -> None:
    for model in sys.argv[1:]:
        # Libera la memoria: con 7 GB de RAM no caben dos modelos a la vez.
        for other in sys.argv[1:]:
            if other != model:
                urllib.request.urlopen(urllib.request.Request(
                    "http://localhost:11434/api/generate",
                    data=json.dumps({"model": other, "keep_alive": 0}).encode(),
                    headers={"Content-Type": "application/json"}), timeout=120).read()
        path = OUT / (model.replace(":", "_") + ".json")
        done = json.loads(path.read_text(encoding="utf-8")) if path.exists() else []
        have = {d["id"] for d in done}
        for q in PREGUNTAS:
            if q["id"] in have:
                continue
            d = chat(model, q["pregunta"])
            rec = {
                "id": q["id"],
                "respuesta_modelo": d["message"]["content"].strip(),
                "segundos": round(d["wall_s"], 1),
                "tokens_prompt": d.get("prompt_eval_count"),
                "tokens_salida": d.get("eval_count"),
                "tok_s_salida": round(d["eval_count"] / (d["eval_duration"] / 1e9), 2) if d.get("eval_duration") else None,
            }
            done.append(rec)
            path.write_text(json.dumps(done, ensure_ascii=False, indent=1), encoding="utf-8")
            print(model, q["id"], rec["segundos"], "s |", rec["respuesta_modelo"][:90].replace("\n", " "), flush=True)


if __name__ == "__main__":
    main()
