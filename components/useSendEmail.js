import React, { useCallback } from "react";
import Mailer from "react-native-mail";

const useSendEmail = ({ subject }) => {
  const sendEmail = useCallback(
    ({ body = '', isHTML = false, attachments } = {}) => {
      return new Promise((resolve, reject) => {
        Mailer.mail(
          {
            subject,
            recipients: ["support@example.com"], // replace with your email
            body: `${body}\n\n Account Id: #123123`,
            isHTML,
            attachments,
          },
          (error, event) => {
            if (error) {
              return reject(error);
            }

            resolve(event);
          }
        );
      });
    },
    [subject]
  );

  return {
    sendEmail,
  };
};

export default useSendEmail;