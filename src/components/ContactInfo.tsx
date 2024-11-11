import React from "react";

export type ContactInfoProps = {
  name: string;
  location: string;
  phoneNumber: string;
  emailAddress: string;
  linkedin: string;
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  name,
  //   location,
  phoneNumber,
  emailAddress,
  linkedin,
}) => {
  return (
    <section id="contact-info" className="mb-5">
      <h1 className="tracking-tight text-4xl font-bold text-center">{name}</h1>
      <div
        id="info-bar"
        className="p-2 w-full text-center text-xs flex gap-1 justify-center h-full"
      >
        {/* <span>{location}</span>
        <Separator orientation="vertical" /> */}
        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        <span>|</span>
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        <span>|</span>
        <a href={linkedin}>{linkedin}</a>
      </div>
    </section>
  );
};

export default ContactInfo;
