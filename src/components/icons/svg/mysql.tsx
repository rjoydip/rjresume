import { twMerge } from 'tailwind-merge'

interface MySQLProps {
  className?: string
}

function MySQL({ className }: MySQLProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="MySQL"
      x="0px"
      y="0px"
      width="512"
      height="512"
      className={twMerge('h-20 w-20', className)}
    >
      <path
        fill="#00618A"
        d="M0 91.313h4.242V74.566l6.566 14.598c.773 1.77 1.832 2.391 3.914 2.391s3.098-.621 3.871-2.391l6.566-14.598v16.746h4.242V74.594c0-1.633-.652-2.422-2-2.828-3.223-1.004-5.383-.137-6.363 2.039l-6.441 14.41-6.238-14.41c-.937-2.176-3.14-3.043-6.359-2.039-1.348.406-2 1.195-2 2.828zM32.93 77.68h4.238v9.227c-.039.5.16 1.676 2.484 1.715h9.223V77.633h4.25c.02 0-.008 14.984-.008 15.047.023 3.695-4.582 4.496-6.707 4.559H33.02v-2.852l13.414-.004c2.73-.285 2.406-1.645 2.406-2.098v-1.113h-9.012c-4.195-.039-6.863-1.871-6.898-3.977-.004-.191.09-9.422 0-9.516zm0 0"
      >
      </path>
      <path
        fill="#E48E00"
        d="M56.391 91.313h12.195c1.426 0 2.813-.301 3.914-.816 1.836-.84 2.73-1.984 2.73-3.48v-3.098c0-1.223-1.016-2.367-3.016-3.125-1.059-.41-2.367-.625-3.629-.625h-5.141c-1.711 0-2.527-.516-2.73-1.656-.039-.137-.039-.246-.039-.383V76.2c0-.109 0-.219.039-.355.203-.867.652-1.113 2.16-1.25l.41-.027h12.109v-2.824H63.488c-1.711 0-2.609.109-3.426.352-2.527.789-3.629 2.039-3.629 4.215v2.473c0 1.902 2.16 3.535 5.789 3.914l1.223.055h4.406c.164 0 .324 0 .449.027 1.344.109 1.914.355 2.324.844.211.195.332.473.324.758v2.477c0 .297-.203.68-.609 1.004-.367.328-.98.543-1.793.598l-.449.027H56.391zm45.297-4.922c0 2.91 2.164 4.539 6.523 4.867l1.227.055h11.051v-2.828h-11.133c-2.488 0-3.426-.625-3.426-2.121V71.738h-4.238V86.39zm-23.75.148V76.457c0-2.559 1.801-4.113 5.355-4.602a7.976 7.976 0 0 1 1.145-.082h8.047c.41 0 .777.027 1.188.082 3.555.488 5.352 2.043 5.352 4.602v10.082c0 2.078-.762 3.188-2.523 3.914l4.18 3.77h-4.926l-3.379-3.051-3.402.215H84.44a9.23 9.23 0 0 1-2.492-.352c-2.699-.734-4.008-2.152-4.008-4.496zm4.578-.246c0 .137.039.273.082.438.246 1.172 1.348 1.824 3.023 1.824h3.852l-3.539-3.195h4.926l3.086 2.789c.57-.305.941-.766 1.074-1.363.039-.137.039-.273.039-.41v-9.668c0-.109 0-.246-.039-.383-.246-1.09-1.348-1.715-2.984-1.715h-6.414c-1.879 0-3.105.816-3.105 2.098zm0 0"
      >
      </path>
      <path
        fill="#00618A"
        d="M124.219 67.047c-2.605-.07-4.598.172-6.301.891-.484.203-1.258.207-1.336.813.266.281.309.699.52 1.039.406.66 1.094 1.539 1.707 2l2.074 1.484c1.273.777 2.699 1.223 3.93 2 .723.461 1.441 1.039 2.148 1.559.348.254.582.656 1.039.816v-.074c-.238-.305-.301-.723-.52-1.039l-.965-.965c-.941-1.25-2.137-2.348-3.41-3.262-1.016-.727-3.281-1.711-3.707-2.891l-.074-.074c.719-.078 1.563-.34 2.223-.516 1.117-.301 2.113-.223 3.262-.52l1.559-.449v-.293c-.582-.598-.996-1.387-1.633-1.93-1.656-1.41-3.469-2.824-5.336-4.004-1.035-.652-2.312-1.074-3.41-1.629-.367-.187-1.016-.281-1.262-.594-.574-.734-.887-1.664-1.332-2.52l-2.668-5.633c-.562-1.285-.93-2.555-1.633-3.707-3.363-5.535-6.988-8.875-12.602-12.156-1.191-.699-2.633-.973-4.148-1.332l-2.449-.148c-.496-.211-1.012-.82-1.48-1.113-1.859-1.176-6.629-3.73-8.008-.371-.867 2.121 1.301 4.191 2.078 5.266.543.754 1.242 1.598 1.629 2.445.258.555.301 1.113.52 1.703.539 1.453 1.008 3.031 1.707 4.375.352.68.738 1.395 1.184 2 .273.371.742.539.816 1.113-.457.641-.484 1.633-.742 2.445-1.16 3.652-.723 8.191.965 10.898.516.828 1.734 2.609 3.41 1.926 1.465-.598 1.137-2.445 1.555-4.078.098-.367.039-.641.223-.887v.074l1.336 2.668c.988 1.59 2.738 3.25 4.223 4.371.773.582 1.379 1.59 2.375 1.93V68.6h-.074c-.195-.297-.496-.422-.742-.664-.582-.57-1.227-1.277-1.703-1.93-1.352-1.832-2.547-3.84-3.633-5.93-.52-.996-.973-2.098-1.41-3.113-.168-.391-.164-.984-.516-1.184-.48.742-1.187 1.344-1.559 2.223-.594 1.402-.668 3.117-.891 4.891l-.148.074c-1.031-.25-1.395-1.312-1.777-2.223-.973-2.305-1.152-6.02-.297-8.672.219-.687 1.219-2.852.813-3.484-.191-.633-.828-1-1.184-1.484a11.7 11.7 0 0 1-1.187-2.074c-.793-1.801-1.164-3.816-2-5.633-.398-.871-1.074-1.75-1.629-2.523-.617-.855-1.305-1.484-1.781-2.52-.168-.367-.398-.957-.148-1.336.078-.254.195-.359.445-.441.43-.332 1.629.109 2.074.293 1.191.496 2.184.965 3.191 1.633.48.32.969.941 1.555 1.113h.668c1.043.238 2.211.07 3.188.367 1.723.523 3.27 1.34 4.668 2.227 4.273 2.695 7.766 6.535 10.156 11.117.387.738.551 1.441.891 2.223.684 1.578 1.543 3.203 2.223 4.746s1.34 3.094 2.297 4.375c.504.672 2.453 1.031 3.336 1.406.621.262 1.637.535 2.223.891 1.125.676 2.211 1.48 3.266 2.223.523.375 2.141 1.188 2.223 1.855zM91.082 38.805a5.26 5.26 0 0 0-1.332.148v.074h.074c.258.535.715.879 1.035 1.336l.742 1.555.074-.07c.461-.324.668-.844.668-1.633-.187-.195-.211-.437-.371-.668-.211-.309-.621-.48-.891-.742zm0 0"
      >
      </path>
    </svg>
  )
}

export { MySQL }
