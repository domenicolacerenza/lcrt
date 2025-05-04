"use client";

import { useEffect } from 'react';

const MailchimpForm = () => {
  useEffect(() => {
    // Definisci le variabili nello scope di useEffect
    let jQueryScript, mailchimpScript, initScript;

    // Funzione per caricare gli script in sequenza
    const loadScripts = async () => {
      // 1. Carica jQuery
      jQueryScript = document.createElement('script');
      jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      jQueryScript.async = true;
      document.body.appendChild(jQueryScript);

      // Aspetta che jQuery sia caricato
      await new Promise((resolve) => {
        jQueryScript.onload = resolve;
      });

      // 2. Carica lo script di validazione di Mailchimp
      mailchimpScript = document.createElement('script');
      mailchimpScript.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
      mailchimpScript.async = true;
      document.body.appendChild(mailchimpScript);

      // Aspetta che lo script di Mailchimp sia caricato
      await new Promise((resolve) => {
        mailchimpScript.onload = resolve;
      });

      // 3. Esegui l'inizializzazione di Mailchimp
      initScript = document.createElement('script');
      initScript.innerHTML = `
        (function($) {
          window.fnames = new Array();
          window.ftypes = new Array();
          fnames[0]='EMAIL';
          ftypes[0]='email';
          fnames[1]='FNAME';
          ftypes[1]='text';
        })(jQuery);
        var $mcj = jQuery.noConflict(true);
      `;
      document.body.appendChild(initScript);
    };

    loadScripts();

    // Cleanup: rimuovi gli script quando il componente si smonta
    return () => {
      if (jQueryScript && document.body.contains(jQueryScript)) document.body.removeChild(jQueryScript);
      if (mailchimpScript && document.body.contains(mailchimpScript)) document.body.removeChild(mailchimpScript);
      if (initScript && document.body.contains(initScript)) document.body.removeChild(initScript);
    };
  }, []);

  return (
    <div className="fixed md:bottom-20 bottom-14 md:w-2/5 w-3/5 mx-auto bg-fuchsia-400/40 rounded-2xl backdrop-blur-2xl shadow-lg border-1 border-[#CCA1A0]/30 p-1">
      <form
        action="https://xyz.us22.list-manage.com/subscribe/post?u=c60b8e828b304526649894705&id=8c3b741d2d&f_id=00d4c5e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <div className="mx-4">
          <label htmlFor="mce-EMAIL" className="block md:text-lg text-sm mb-1 text-gray-200 text-center">
          Updates incoming
          </label>
          <input
            type="email"
            name="EMAIL"
            className="-my-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 placeholder-opacity-75 text-center"
            id="mce-EMAIL"
            placeholder="example@mail.com"
            required
          />
        </div>

        {/* Campo anti-bot nascosto */}
        <div aria-hidden="true" className="absolute -left-[5000px]">
          <input type="text" name="b_c60b8e828b304526649894705_8c3b741d2d" tabIndex="-1" defaultValue="" />
        </div>

        {/* Risposte di errore/successo */}
        <div id="mce-responses" className="mt-2">
          <div className="response hidden" id="mce-error-response"></div>
          <div className="response hidden" id="mce-success-response"></div>
        </div>

        {/* Pulsante di invio */}
        <div className="text-center">
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className=" buttonstyle px-2 py-1 rounded-lg mt-1"
          />
        </div>
      </form>
    </div>
  );
};

export default MailchimpForm;