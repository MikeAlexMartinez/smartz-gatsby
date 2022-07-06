import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-sky-600">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-around items-center py-12">
        <div className="flex flex-col items-center">
          <div className="h-[150px] w-[150px]">
            <img src="./images/xero-white.png" alt="xero logo" className="object-fill" />
          </div>
          <div className="w-full">
            <p className="relative bottom-5 text-center text-white italic font-extralight">Certified</p>
          </div>
        </div>
        <div className="border bg-white rounded p-2 mt-12 md:m-0 object-contain">
            <img src="./images/AAT.png" alt="AAT Certified bookkeeper logo"/>
        </div>
        <div className="border border-white bg-sky-600 text-white rounded p-2">
          <div className="mb-[2px] p-1">
            <h2 className="text-l md:text-xl">
              Contact
            </h2>
          </div>
          <div className="p-1 font-light flex cursor-pointer">
            <div className="mr-2">
              <a href="mailto:smartzbooks@outlook.com">Email: </a>
              <br />
              <a href="tel:07753662253">Tel: </a>
            </div>
            <div>
              <address>
                <a href="mailto:smartzbooks@outlook.com">smartzbooks@outlook.com</a>
                <br />
                <a href="tel:07753662253">07753 66 22 53</a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
