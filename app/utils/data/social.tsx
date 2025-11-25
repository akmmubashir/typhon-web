import {
  CallIcon,
  EnvelopeIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/app/components/icons";

export const socialData = [
  {
    id: 1,
    title: "Instagram",
    icon: (
      <InstagramIcon
        size="w-[24px] h-[24px]"
        color="stroke-[#fa4729] group:stroke-[#db2b0e]"
      />
    ),
    url: "/",
  },
  {
    id: 2,
    title: "Facebook",
    icon: (
      <FacebookIcon
        size="w-[24px] h-[24px]"
        color="stroke-[#fa4729] group:stroke-[#db2b0e]"
      />
    ),
    url: "/",
  },
  {
    id: 3,
    title: "Email",
    icon: (
      <EnvelopeIcon
        size="w-[24px] h-[24px]"
        color="stroke-[#fa4729] group:stroke-[#db2b0e]"
      />
    ),
    url: "/",
  },
  {
    id: 4,
    title: "Phone",
    icon: (
      <CallIcon
        size="w-[24px] h-[24px]"
        color="stroke-[#fa4729] group:stroke-[#db2b0e]"
      />
    ),
    url: "/",
  },
  {
    id: 5,
    title: "YouTube",
    icon: (
      <YoutubeIcon
        size="w-[24px] h-[24px]"
        color="stroke-[#fa4729] group:stroke-[#db2b0e]"
      />
    ),
    url: "/",
  },
];
