// Generado a partir de los resultados del experimento (no editar a mano).
export type Grade = 'correcta' | 'parcial' | 'incorrecta' | 'inventada'
export const GRADES: Grade[] = ['correcta', 'parcial', 'incorrecta', 'inventada']
export type Model = { key: string; name: string; where: string; cost: string; counts: Record<Grade, number>; traps: number; time: string }
export type Question = { id: number; tipo: string; pregunta: string; respuesta: string; grades: Record<string, [Grade, string]> }
export const MODELS: Model[] = [
 {
  "key": "chatgpt_gratis",
  "name": "ChatGPT",
  "where": "Nube, gratis sin cuenta",
  "cost": "0 €",
  "counts": {
   "correcta": 15,
   "parcial": 0,
   "incorrecta": 0,
   "inventada": 0
  },
  "traps": 3,
  "time": "No cronometrado"
 },
 {
  "key": "gemini_gratis",
  "name": "Gemini Flash-Lite",
  "where": "Nube, gratis sin cuenta",
  "cost": "0 €",
  "counts": {
   "correcta": 14,
   "parcial": 1,
   "incorrecta": 0,
   "inventada": 0
  },
  "traps": 3,
  "time": "No cronometrado"
 },
 {
  "key": "qwen3.5_4b",
  "name": "Qwen 3.5 (4B)",
  "where": "Ordenador propio",
  "cost": "0 € + luz",
  "counts": {
   "correcta": 12,
   "parcial": 2,
   "incorrecta": 1,
   "inventada": 0
  },
  "traps": 3,
  "time": "79 s (la primera, 184 s)"
 },
 {
  "key": "gemma3_4b",
  "name": "Gemma 3 (4B)",
  "where": "Ordenador propio",
  "cost": "0 € + luz",
  "counts": {
   "correcta": 7,
   "parcial": 4,
   "incorrecta": 2,
   "inventada": 2
  },
  "traps": 1,
  "time": "14 s (la primera, 149 s)"
 },
 {
  "key": "llama3.2_3b",
  "name": "Llama 3.2 (3B)",
  "where": "Ordenador propio",
  "cost": "0 € + luz",
  "counts": {
   "correcta": 6,
   "parcial": 5,
   "incorrecta": 2,
   "inventada": 2
  },
  "traps": 1,
  "time": "45 s (la primera, 152 s)"
 }
]
export const QUESTIONS: Question[] = [
 {
  "id": 1,
  "tipo": "dato",
  "pregunta": "¿Cuál fue el beneficio neto reportado de Iberdrola en los nueve primeros meses de 2026 y cuánto creció?",
  "respuesta": "5.816,1 millones de euros, un 9,6 % más.",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    ""
   ],
   "gemini_gratis": [
    "correcta",
    ""
   ],
   "qwen3.5_4b": [
    "correcta",
    ""
   ],
   "gemma3_4b": [
    "correcta",
    ""
   ],
   "llama3.2_3b": [
    "correcta",
    ""
   ]
  }
 },
 {
  "id": 2,
  "tipo": "dato",
  "pregunta": "¿Cuál fue el beneficio neto ajustado y cuánto creció?",
  "respuesta": "5.140,5 millones de euros, un 8,8 % más.",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    ""
   ],
   "gemini_gratis": [
    "correcta",
    ""
   ],
   "qwen3.5_4b": [
    "correcta",
    ""
   ],
   "gemma3_4b": [
    "correcta",
    ""
   ],
   "llama3.2_3b": [
    "correcta",
    ""
   ]
  }
 },
 {
  "id": 3,
  "tipo": "dato",
  "pregunta": "¿Cuánto fue el EBITDA ajustado y cuánto creció?",
  "respuesta": "11.890,6 millones de euros, un 7,5 % más.",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    ""
   ],
   "gemini_gratis": [
    "correcta",
    ""
   ],
   "qwen3.5_4b": [
    "correcta",
    ""
   ],
   "gemma3_4b": [
    "correcta",
    ""
   ],
   "llama3.2_3b": [
    "correcta",
    ""
   ]
  }
 },
 {
  "id": 4,
  "tipo": "dato",
  "pregunta": "¿Cuánto invirtió Iberdrola en el periodo?",
  "respuesta": "10.087,2 millones de euros, un 13 % más.",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    ""
   ],
   "gemini_gratis": [
    "correcta",
    ""
   ],
   "qwen3.5_4b": [
    "correcta",
    ""
   ],
   "gemma3_4b": [
    "correcta",
    ""
   ],
   "llama3.2_3b": [
    "parcial",
    "La cifra es correcta, pero añade que la inversión en Redes subió un 31 %; ese 31 % es el crecimiento de la transmisión."
   ]
  }
 },
 {
  "id": 5,
  "tipo": "dato",
  "pregunta": "¿Cuál es el dividendo a cuenta de 2026 por acción?",
  "respuesta": "0,275 euros brutos por acción, un 8,7 % más que el año anterior.",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    ""
   ],
   "gemini_gratis": [
    "correcta",
    ""
   ],
   "qwen3.5_4b": [
    "correcta",
    ""
   ],
   "gemma3_4b": [
    "correcta",
    ""
   ],
   "llama3.2_3b": [
    "correcta",
    ""
   ]
  }
 },
 {
  "id": 6,
  "tipo": "dato",
  "pregunta": "¿Cuál es la deuda financiera neta ajustada?",
  "respuesta": "54.561 millones de euros.",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    ""
   ],
   "gemini_gratis": [
    "correcta",
    ""
   ],
   "qwen3.5_4b": [
    "correcta",
    ""
   ],
   "gemma3_4b": [
    "correcta",
    ""
   ],
   "llama3.2_3b": [
    "correcta",
    ""
   ]
  }
 },
 {
  "id": 7,
  "tipo": "comprension",
  "pregunta": "¿Por qué el beneficio neto reportado es mayor que el ajustado?",
  "respuesta": "Porque el reportado incluye la plusvalía neta por la venta del negocio de México (953 M€), que el ajustado excluye. El ajustado, además, suma las capital allowances de Reino Unido (277,6 M€).",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    "Cita la plusvalía de México (953 M€) y el ajuste fiscal de Reino Unido."
   ],
   "gemini_gratis": [
    "correcta",
    "Cita la plusvalía de México; no menciona el ajuste de Reino Unido."
   ],
   "qwen3.5_4b": [
    "correcta",
    "Cita la plusvalía de México (953 M€) y el ajuste de Reino Unido."
   ],
   "gemma3_4b": [
    "parcial",
    "Acierta con la plusvalía de México (953 M€), pero dice que cuenta como operaciones continuadas; el informe dice discontinuadas."
   ],
   "llama3.2_3b": [
    "incorrecta",
    "Atribuye la diferencia al ajuste de Reino Unido y no menciona la plusvalía de México."
   ]
  }
 },
 {
  "id": 8,
  "tipo": "comprension",
  "pregunta": "¿Qué negocio creció y cuál retrocedió en EBITDA ajustado?",
  "respuesta": "Redes creció un 14,9 % (6.430,2 M€); Generación y Clientes cayó un 1,5 % (5.359,3 M€).",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    ""
   ],
   "gemini_gratis": [
    "correcta",
    ""
   ],
   "qwen3.5_4b": [
    "correcta",
    ""
   ],
   "gemma3_4b": [
    "parcial",
    "Acierta qué negocio sube y cuál baja, pero da a Redes un +7,5 %; es +14,9 %."
   ],
   "llama3.2_3b": [
    "correcta",
    ""
   ]
  }
 },
 {
  "id": 9,
  "tipo": "comprension",
  "pregunta": "¿Por qué bajó el EBITDA de Generación y Clientes?",
  "respuesta": "Porque vendió más electricidad a precios fijados en 2025, lo que subió los costes de aprovisionamiento; lo compensaron en parte el bombeo y un 3 % más de producción.",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    ""
   ],
   "gemini_gratis": [
    "correcta",
    ""
   ],
   "qwen3.5_4b": [
    "correcta",
    ""
   ],
   "gemma3_4b": [
    "parcial",
    "Menciona los costes de aprovisionamiento, pero añade como causas los contadores de Reino Unido y los costes de EE. UU., que no tienen que ver."
   ],
   "llama3.2_3b": [
    "parcial",
    "Acierta los costes de aprovisionamiento por precios de 2025, pero dice que el bombeo restó, cuando el informe dice que compensó."
   ]
  }
 },
 {
  "id": 10,
  "tipo": "comprension",
  "pregunta": "El EBITDA ajustado sube un 7,5 %, pero el reportado baja un 0,7 %. ¿Por qué?",
  "respuesta": "Porque las cifras reportadas de 2025 incluían efectos extraordinarios: el reconocimiento de costes pasados en EE. UU. (530 M€) y la venta de contadores inteligentes en Reino Unido (382 M€).",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    ""
   ],
   "gemini_gratis": [
    "correcta",
    ""
   ],
   "qwen3.5_4b": [
    "parcial",
    "Nombra los dos efectos de 2025 (530 M€ y 382 M€), pero dice que redujeron el beneficio de 2025; en realidad lo inflaron."
   ],
   "gemma3_4b": [
    "parcial",
    "Nombra los dos efectos de 2025 (530 M€ y 382 M€), pero dice que redujeron el EBITDA reportado; en realidad lo inflaron."
   ],
   "llama3.2_3b": [
    "parcial",
    "Menciona los costes pasados de EE. UU., pero no la venta de contadores en Reino Unido y la explicación es confusa."
   ]
  }
 },
 {
  "id": 11,
  "tipo": "comprension",
  "pregunta": "¿Por qué empeoró el resultado financiero?",
  "respuesta": "Pasó de -1.163 a -1.687 M€ sobre todo por derivados y otros: en 2025 hubo un ingreso extraordinario de 285 M€ por la liquidación de derivados de East Anglia 3, y las coberturas en divisa fueron positivas en 2025 y negativas en 2026. La deuda empeoró 85 M€ por un saldo medio mayor.",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    ""
   ],
   "gemini_gratis": [
    "correcta",
    ""
   ],
   "qwen3.5_4b": [
    "incorrecta",
    "Lo confunde con el beneficio neto y dice que no empeoró; solo al final menciona los derivados."
   ],
   "gemma3_4b": [
    "incorrecta",
    "Confunde el resultado financiero con el beneficio neto e inventa una depreciación del peso mexicano."
   ],
   "llama3.2_3b": [
    "parcial",
    "Acierta lo de los derivados, pero habla del «primer semestre» y añade causas que el informe no da."
   ]
  }
 },
 {
  "id": 12,
  "tipo": "comprension",
  "pregunta": "¿Cuánto pagará Iberdrola por Caruna y qué parte compra?",
  "respuesta": "El 80 %, con una inversión de 2.000 M€ (1.000 M€ aplazados un año). La operación valora la empresa entera en unos 5.000 M€.",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    ""
   ],
   "gemini_gratis": [
    "parcial",
    "Habla de 2.000 M€ de «inversión inicial» con 1.000 M€ aplazados, lo que sugiere 3.000 M€ en total; el informe dice 2.000 M€, de los que 1.000 M€ se aplazan."
   ],
   "qwen3.5_4b": [
    "parcial",
    "Habla de 2.000 M€ de desembolso inicial y «los restantes» 1.000 M€ aplazados, lo que sugiere 3.000 M€; el informe dice 2.000 M€ en total."
   ],
   "gemma3_4b": [
    "incorrecta",
    "Dice que paga unos 5.000 M€; esa es la valoración del 100 %."
   ],
   "llama3.2_3b": [
    "incorrecta",
    "Dice que paga unos 5.000 M€; esa es la valoración del 100 %. La inversión es de 2.000 M€."
   ]
  }
 },
 {
  "id": 13,
  "tipo": "trampa",
  "pregunta": "¿Cuántos empleados tenía Iberdrola a cierre de septiembre de 2026?",
  "respuesta": "El texto no lo dice.",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    "Dice que el dato no aparece."
   ],
   "gemini_gratis": [
    "correcta",
    ""
   ],
   "qwen3.5_4b": [
    "correcta",
    "Dice que el dato no aparece."
   ],
   "gemma3_4b": [
    "inventada",
    "Afirma que hay 36.444 empleados."
   ],
   "llama3.2_3b": [
    "inventada",
    "Afirma que hay 73.000 empleados."
   ]
  }
 },
 {
  "id": 14,
  "tipo": "trampa",
  "pregunta": "¿Cuál fue el beneficio neto solo del tercer trimestre (julio a septiembre)?",
  "respuesta": "El texto no lo dice: solo da cifras acumuladas de nueve meses.",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    "Dice que solo hay cifras acumuladas."
   ],
   "gemini_gratis": [
    "correcta",
    ""
   ],
   "qwen3.5_4b": [
    "correcta",
    "Dice que no hay desglose trimestral."
   ],
   "gemma3_4b": [
    "inventada",
    "Da un beneficio del tercer trimestre de 1.873,3 M€ que no está en el texto."
   ],
   "llama3.2_3b": [
    "inventada",
    "Da los 5.816,1 M€ de nueve meses como si fueran solo del tercer trimestre."
   ]
  }
 },
 {
  "id": 15,
  "tipo": "trampa",
  "pregunta": "¿Qué precio objetivo para la acción da el informe?",
  "respuesta": "El texto no da ningún precio objetivo ni recomendación.",
  "grades": {
   "chatgpt_gratis": [
    "correcta",
    "Dice que no hay precio objetivo."
   ],
   "gemini_gratis": [
    "correcta",
    ""
   ],
   "qwen3.5_4b": [
    "correcta",
    ""
   ],
   "gemma3_4b": [
    "correcta",
    ""
   ],
   "llama3.2_3b": [
    "parcial",
    "Dice bien que no hay precio objetivo, pero atribuye al informe comentarios sobre la cotización que no contiene."
   ]
  }
 }
]
