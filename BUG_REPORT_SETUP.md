# Direct bug reporting — setup required

The Report a bug button uses the browser's standard HTML POST to:
https://formsubmit.co/contact@studyzone.tech

This does **not** require visitors to log into email. The submission opens a separate FormSubmit response tab, so users see whether the service accepted it or requires activation.

## Required for real delivery
1. Publish the website over HTTPS (or run it over localhost during development). Double-clicking `index.html` with a `file://` address is not supported by FormSubmit.
2. Submit one test report from the published site.
3. Sign in to **contact@studyzone.tech**, find the FormSubmit activation email (check Spam/Junk), and click its activation link **once**. This verification cannot be completed by front-end JavaScript.
4. Submit a fresh report. Confirm the result in FormSubmit's tab and verify that it arrives in the mailbox.

If you cannot access the mailbox, ask its owner to activate it. For guaranteed delivery with an in-site success status, configure a server-side endpoint or a form service with verified account credentials and replace the FormSubmit endpoint.

The site never claims successful email delivery merely because a browser navigation began.
