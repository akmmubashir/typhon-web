import React from "react";
import {
  CallIcon,
  EnvelopeIcon,
  InfoIcon,
  PenIcon,
  SendIcon,
  UserIcon,
} from "./icons";

const Form = () => {
  return (
    <React.Fragment>
      <div className="col-span-6 max-lg:col-span-full flex gap-2.5 border-b border-[#949494] hover:border-black group py-2.5">
        <div>
          <UserIcon size="w-5 h-5" color="stroke-[#fa4729]" />
        </div>
        <input
          type="text"
          placeholder="Name"
          className="outline-none bg-transparent w-full group text-[16px] max-lg:text-[14px]"
        />
      </div>
      <div className="col-span-6 max-lg:col-span-full flex gap-2.5 border-b border-[#949494] hover:border-black group py-2.5">
        <div>
          <EnvelopeIcon size="w-5 h-5" color="stroke-[#fa4729]" />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="outline-none bg-transparent w-full group text-[16px] max-lg:text-[14px]"
        />
      </div>
      <div className="col-span-6 max-lg:col-span-full flex gap-2.5 border-b border-[#949494] hover:border-black group py-2.5">
        <div>
          <CallIcon size="w-5 h-5" color="stroke-[#fa4729]" />
        </div>
        <input
          type="number"
          placeholder="Phone Number"
          className="outline-none bg-transparent w-full group text-[16px] max-lg:text-[14px]"
        />
      </div>
      <div className="col-span-6 max-lg:col-span-full flex gap-2.5 border-b border-[#949494] hover:border-black group py-2.5">
        <div>
          <InfoIcon size="w-5 h-5" color="stroke-[#fa4729]" />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="outline-none bg-transparent w-full group text-[16px] max-lg:text-[14px]"
        />
      </div>
      <div className="col-span-full flex gap-2.5 border-b border-[#949494] hover:border-black group py-2.5">
        <div>
          <PenIcon size="w-5 h-5" color="stroke-[#fa4729]" />
        </div>
        <textarea
          rows={3}
          placeholder="How can we help you? Feel free to get in touch!"
          className="outline-none bg-transparent w-full group text-[16px] max-lg:text-[14px]"
        />
      </div>
      <div className="col-span-full flex max-lg:flex-wrap max-lg:flex-col-reverse items-center max-lg:items-start gap-10 max-lg:gap-[20px_0]">
        <div>
          <button className="flex items-center gap-2 cursor-pointer bg-[#fa4729] hover:bg-[#db2b0e] text-white font-medium text-[16px] max-lg:text-[14px] p-[10px_20px] rounded-md ">
            <div>
              <SendIcon size="w-6 h-6" color="stroke-white" />
            </div>
            <span>Get In Touch</span>
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <input type="checkbox" size={10} className="cursor-pointer" />
          <p className="text-[16px] max-lg:text-[14px]">
            agree that my data is collected and stored.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
