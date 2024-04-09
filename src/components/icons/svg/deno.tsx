import { twMerge } from "tailwind-merge";

interface DenoProps {
  className?: string;
}

const Deno = ({ className }: DenoProps) => {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Deno"
      x="0px"
      y="0px"
      width="512"
      height="512"
      className={twMerge("h-20 w-20", className)}
    >
      <path d="M64 2C29.755 2 2 29.755 2 64c0 34.245 27.755 62 62 62 34.245 0 62-27.755 62-62 0-34.245-27.755-62-62-62zm32.09 20.126.023-.073.799-3.003.363.266a53.424 53.424 0 0 1 4.771 3.997l-.097.314-.022.073a3.03 3.03 0 0 1-3.488 2.01 3.02 3.02 0 0 1-2.349-3.584zm-13.853 5.716.023-.073c.46-1.55 2.107-2.47 3.705-2.059 1.574.436 2.519 2.059 2.131 3.657v.073l-3.245 11.988-.266-.218a32.286 32.286 0 0 0-5.11-3.1zM71.484 14.497l.023-.073 1.453-5.4.436.072c1.84.315 3.681.727 5.473 1.211l-1.526 5.691-.022.073a3.03 3.03 0 0 1-3.488 2.01 3.02 3.02 0 0 1-2.349-3.584zM49.009 23.7l.023-.073 3.826-14.216.412-.072a57.938 57.938 0 0 1 5.764-.824c.097.436.097.92-.023 1.356l-.022.073-4.117 15.258-.023.073a3.03 3.03 0 0 1-3.488 2.01 3.02 3.02 0 0 1-2.349-3.584zM13.843 56.395c-.46 1.55-2.107 2.47-3.681 2.058a2.867 2.867 0 0 1-1.502-.92 55.517 55.517 0 0 1 6.467-20.295c.242 0 .484.023.726.097a3.042 3.042 0 0 1 2.156 3.657l-.023.073-4.117 15.258zm12.4 8.33v.074l-4.117 15.258-.023.072c-.46 1.526-2.034 2.422-3.608 2.059-1.623-.388-2.616-2.034-2.229-3.657v-.073L20.384 63.2l.022-.073c.46-1.55 2.107-2.47 3.706-2.058 1.574.436 2.519 2.058 2.131 3.657zm1.187-20.78c-1.623-.387-2.616-2.034-2.228-3.656l.022-.073 4.117-15.258.023-.073c.46-1.55 2.107-2.47 3.681-2.058a3.028 3.028 0 0 1 2.156 3.633l-.023.096-4.117 15.258-.023.073c-.46 1.526-2.034 2.422-3.608 2.059zm7.992 52.096-.023.072c-.46 1.526-2.034 2.422-3.608 2.06-1.623-.388-2.616-2.035-2.228-3.658l.022-.073 4.117-15.258.023-.097.194-.46a27.216 27.216 0 0 0 5.231 3.56zm12.473 9.324-.023.073-2.93 10.923-.412-.17a51.943 51.943 0 0 1-5.207-2.252l2.712-10.075.023-.073a3.011 3.011 0 0 1 3.681-2.058c1.599.412 2.543 2.034 2.156 3.633zm16.929-7.726-.073.34v.072l-4.117 15.258-.023.073a3.03 3.03 0 0 1-3.487 2.01 3.032 3.032 0 0 1-2.35-3.584v-.073l4.118-15.258.022-.073a3.026 3.026 0 0 1 3.706-2.059 2.984 2.984 0 0 1 1.889 1.526l.097.436.145.702.097.51zm40.276 3.948c-8.622 9.421-20.441 15.863-33.737 17.631l-.121-.8-.218-1.598-.194-1.162-.218-1.526-.29-1.865-.121-.726-.266-1.768-.17-1.042-.218-1.356-.218-1.308-.218-1.26-.218-1.234-.194-1.211-.218-1.163-.194-1.114-.145-.823-.17-.8-.096-.508-.194-1.017-.146-.727-.169-.896-.145-.63-.12-.605-.122-.581-.073-.388-.17-.726-.12-.533-.121-.533-.097-.339-.12-.484-.098-.46-.12-.46-.121-.437-.073-.266-.121-.412-.097-.387-.073-.266-.097-.243-.072-.218-.097-.339-.073-.242-.049-.145a9.113 9.113 0 0 0-.435-1.138l-.073-.145.557-1.454-2.204.073-.605.023c-20.006.412-32.915-8.09-32.915-21.409 0-14.12 14.047-25.478 32.066-25.478 8.67 0 16.105 2.398 21.966 6.975 4.989 3.9 8.646 9.276 10.535 15.355l.048.145.048.17.097.314.145.582.388 1.356.411 1.55.703 2.567 1.114 4.069 1.792 6.684 2.035 7.605 3.269 12.23 1.235 4.601zm3.052-60.595-.023.073-4.117 15.258-.023.073c-.46 1.525-2.034 2.421-3.609 2.058-1.622-.387-2.615-2.034-2.228-3.657l.023-.073 4.117-15.258v-.072a3.078 3.078 0 0 1 3.705-2.059 3.062 3.062 0 0 1 2.156 3.657zm10.414 20.344-4.142 15.258v.073c-.436 1.623-2.107 2.567-3.73 2.131-1.622-.436-2.567-2.107-2.13-3.73l.022-.072 4.117-15.258.023-.073c.46-1.55 2.107-2.47 3.681-2.059a3.028 3.028 0 0 1 2.156 3.633zM69.329 51.164a3.875 3.875 0 0 1-3.875 3.875 3.875 3.875 0 0 1-3.875-3.875 3.875 3.875 0 0 1 3.875-3.875 3.875 3.875 0 0 1 3.875 3.875z"></path>
    </svg>
  );
};

export { Deno };
