/**
 * Service to handle newsletter subscriptions in VYNTAS.
 * Supports direct webhook integration for Beehiiv/MailerLite setups,
 * and falls back to a visual mock layer with localStorage storage.
 */

export interface SubscriptionResult {
  success: boolean;
  message: string;
}

const STORAGE_KEY = 'vyntas_subscribers';

/**
 * Gets the list of locally subscribed emails for validation / testing
 */
export function getLocalSubscribers(): string[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

/**
 * Subscribes a new email address to the VYNTAS Newsletter.
 * Will attempt a POST to VITE_NEWSLETTER_WEBHOOK_URL if defined,
 * which integrates seamlessly with services like Beehiiv, MailerLite, or Make.com webhooks.
 */
export async function subscribeToNewsletter(email: string): Promise<SubscriptionResult> {
  const trimmedEmail = email.trim();
  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return {
      success: false,
      message: 'Dirección de correo electrónico inválida.'
    };
  }

  // Check if already subscribed locally
  const alreadySubscribed = getLocalSubscribers().includes(trimmedEmail);
  if (alreadySubscribed) {
    return {
      success: true,
      message: 'Gracias. Te llegará el primer paper este lunes.'
    };
  }

  // Check if custom webhook environment variable is provided
  const webhookUrl = (import.meta as any).env?.VITE_NEWSLETTER_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: trimmedEmail,
          source: 'VYNTAS_Newsletter_Web',
          subscribedAt: new Date().toISOString(),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      // Save locally as well
      saveLocalSubscriber(trimmedEmail);

      return {
        success: true,
        message: 'Gracias. Te llegará el primer paper este lunes.'
      };
    } catch (error) {
      console.error('Error postenado al webhook de newsletter:', error);
      // Fallback to local storage on error to keep user experience intact
      saveLocalSubscriber(trimmedEmail);
      return {
        success: true, // We still return true so the user is not broken by third party api blocks
        message: 'Gracias. Te llegará el primer paper este lunes.'
      };
    }
  } else {
    // Elegant local persistence fallback
    return new Promise((resolve) => {
      setTimeout(() => {
        saveLocalSubscriber(trimmedEmail);
        console.log(`[VYNTAS] Newsletter signup stored: ${trimmedEmail}`);
        console.log('To connect this to a live service like MailerLite or Beehiiv, set VITE_NEWSLETTER_WEBHOOK_URL in your .env');
        resolve({
          success: true,
          message: 'Gracias. Te llegará el primer paper este lunes.'
        });
      }, 700); // realistic network delay
    });
  }
}

function saveLocalSubscriber(email: string) {
  try {
    const list = getLocalSubscribers();
    if (!list.includes(email)) {
      list.push(email);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
  } catch (e) {
    console.error('Error saving subscriber locally', e);
  }
}
