import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import '@/app/styles/contact.css';
import { BackgroundBeams } from './ui/background-beams';

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactMe() {
  useEffect(() => {
    const openButton = document.getElementById('myButton');
    const modal = document.getElementById('modal');
    const darkness = document.getElementById('darkness');
    const close = document.getElementById('close');
    if (openButton) {
      openButton.onclick = function () {
        if (modal && darkness) {
          modal.style.display = 'block';
          darkness.style.display = 'grid';
        }
      };
    }
    if (close) {
      close.onclick = function () {
        if (modal && darkness) {
          modal.style.display = 'none';
          darkness.style.display = 'none';
        }
      };
    }
    window.onclick = function (event: MouseEvent) {
      if (event.target === darkness) {
        if (modal && darkness) {
          modal.style.display = 'none';
          darkness.style.display = 'none';
        }
      }
    };
  }, []);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const colors = [
    0xfef26a, 0xfe8462, 0xff70cb, 0xd270ff, 0x743ad5, 0x709df8, 0x5bffbd,
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const modal = document.getElementById('modal');
    const darkness = document.getElementById('darkness');
    console.log(randomColor);

    const webhookUrl =
      'http://localhost:8080/https://ptb.discord.com/api/webhooks/1214938248535871549/6eYtmkKW602DSxLQjjgX9OkV6PoUIcWyluQPwGvrIlvXG8Zb6MVPn6rUd524PRuITt_N';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [
            {
              // title: 'New Message Received',
              description: `**from:** ${formData.name} (${formData.email})\n\n ${formData.message}`,
              color: randomColor,
            },
          ],
          // content: `New message from ${formData.name} (${formData.email}): ${formData.message}`,
        }),
      });

      if (!response.ok) {
        console.log('no working');
      }

      console.log('the bluetooth device connected sucessfuly');
      if (modal && darkness) {
        modal.style.display = 'none';
        darkness.style.display = 'none';
      }
      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      console.log('not work');
    }
  };
  // useEffect(() => {
  //   const submitButton = document.getElementById('myButton');
  //   if (submitButton) {
  //     submitButton.addEventListener('click', handleSubmit);
  //   }

  //   //cleanup
  //   return () => {
  //     if (submitButton) {
  //       submitButton.removeEventListener('click', handleSubmit);
  //     }
  //   };
  // }, []);

  return (
    <div className="flex z-[21] items-center justify-center">
      <div
        className="darkness w-screen h-screen absolute top-0 grid items-center justify-center"
        id="darkness"
      >
        <div className="modal" id="modal">
          <div className="titlebar">
            <span className="contact-title">.contact me</span>
            <span className="close" id="close">
              &times;
            </span>
            <div className="rainbow-line secondwan"></div>
          </div>
          <BackgroundBeams />
          <div className="form-container h-full w-full grid items-center justify-center">
            <form>
              <div className="name-group">
                <input
                  className="name-input  abc"
                  type="text"
                  placeholder=" "
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                ></input>
                <label className="name-label" htmlFor="name">
                  name
                </label>
              </div>
              <div className="email-group">
                <input
                  className="email-input abc"
                  type="text"
                  placeholder=" "
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                ></input>
                <label className="email-label" htmlFor="email">
                  email address
                </label>
              </div>
              <div className="message-group">
                <textarea
                  className="message-input abc"
                  placeholder=" "
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label className="message-label" htmlFor="email">
                  message
                </label>
              </div>
              <button
                className="send-button"
                id="sendButton"
                type="submit"
                onClick={handleSubmit}
              >
                .send
              </button>
            </form>
          </div>
        </div>
      </div>
      <button id="myButton" className=" fixed bottom-0 py-1 z-[-1] contact">
        .contact me
      </button>
    </div>
  );
}

export default ContactMe;
