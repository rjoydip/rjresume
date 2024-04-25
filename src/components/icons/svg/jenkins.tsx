import { twMerge } from 'tailwind-merge'

interface JenkinsProps {
  className?: string
}

function Jenkins({ className }: JenkinsProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Jenkins"
      x="0px"
      y="0px"
      width="512"
      height="512"
      className={twMerge('h-20 w-20', className)}
    >
      <path d="M67.564.006c-3.588.067-7.1.665-10.027 1.742-2.175.8-4.28 1.517-6.191 2.639-5.111 3-10.537 5.006-12.053 11.045-3.253 1.457-4.524 5.274-4.674 9.9-1.164.976-2.297 1.987-3.36 3.074-8.37 8.562-13.546 20.393-13.546 33.446 0 13.05 5.176 24.88 13.547 33.441a45.23 45.23 0 0 0 2.744 2.555c.071 1.023.14 2.046.207 3.08.134 2.084-.088 4.292.453 5.443.558 1.19 2.625 1.57 4.12 2.262 4.314 1.996 8.892 5.044 14.552 4.44 1.349 4.535 2.625 9.365 4.244 13.337 5.803 2.087 14.963 1.76 20.996 1.035 1.834-.221 3.768-1.127 4.2-2.716-.13-.981-.273-1.948-.212-3.108 1.887-.39 4.455-.714 4.87-2.8.581-2.93-1.848-7.124-1.038-10.337 1.093-.355 2.259-.632 2.084-2.355 1.841-.958 4.022-1.173 6.352-1.082.3.58.727 1.137 1.111 1.457 3.264.655 6.426.71 9.135-.174 3.068-1.001 4.533-7.275 3.83-10.26-.497-2.115-1.624-5.58-2.584-7.629-.599-1.28-1.479-2.063-2.517-2.511a47.818 47.818 0 0 0 6.48-24.078c.001-13.052-5.175-24.884-13.547-33.446-.39-.399-.805-.772-1.21-1.154-.279-4.978-1.24-9.668-3.038-13.3-1.57-3.176-5.959-7.56-8.705-9.638C79.74 1.254 73.546-.106 67.564.006zm.479 2.84c4.847-.048 10.236 1.66 13.887 3.72 3.05 1.721 5.301 5.05 7.447 7.819-3.01-.893-5.57.64-5.104 3.123 2.52-2.309 6.822-.025 8.094 2.527 1.218 2.441 1.21 6.057 1.397 9.686.453 8.798-1.61 17.875-6.032 24.234-1.181 1.698-2.173 3.553-3.836 4.723-4.005 2.813-10.095 5.363-15.308 3.615-6.89-2.312-10.02-6.903-13.809-12.16.103 2.887 2.134 5.257 4.139 7.467 1.746 1.925 3.852 4.1 6.117 4.998-1.89-.444-4.792-.584-5.58 1.113-4.41-.293-8.507-.743-10.594-3.732-1.643-2.357-3.315-6.364-4.064-9.46-.153-.635-.414-1.99-.35-2.337.246-1.343 2.638-1.932 1.698-3.809-1.736-.016-2.128 1.58-3.721 1.738-4.125.408-7.035-5.467-6.848-9.011.159-3.015 2.706-5.9 6.192-5.518 2.463.27 3.299 2.958 3.777 5.35 1.42.076 3.473-.06 4.144-1.168-.096-2.704-1.351-4.872-1.265-7.356.162-4.668 2.704-8.88.742-13.478 2.1-4.765 8.261-8.525 12.818-10.797 1.765-.88 3.856-1.265 6.059-1.287zM55.503 5.19c.2.032.382.186.558.373-.031.812-.83.795-1.37 1.055-.84 1.032-2.067 1.516-3.09 2.649-1.048 1.16-2.223 4.276-3.613 4.62-.697.174-1.492-.12-2.1-.081-1.605.101-2.735.923-4.363 1.16 2.102-4.596 8.66-8.314 13.776-9.764a.462.462 0 0 1 .203-.012zm8.741 9.973c-2.636.003-5.64 2.822-6.422 4.973-.318.874-.82 2.59.442 2.896 1.413-3.149 3.727-6.187 8.388-5.101.895-1.472-.704-2.553-1.886-2.73a3.472 3.472 0 0 0-.522-.038zm-16.654.479c1.802 4.586-1.294 10.037-.14 15.052.352 1.536 1.572 3.92-.378 3.971.051-4.37-5.368-7.142-9.453-4.572-.273-3.315-.748-7.973 1.512-10.46 2.085-2.295 4.96-3.726 8.459-3.991zm41.775 7.597c-.149 2.518.787 4.033 1.436 5.813-1.122.706-3.305.265-4.57.818-.09 3.723 5.758 1.89 6.648-.183-1.329-1.932-2.24-4.25-3.293-6.438l-.22-.01zm-20.326.057c-.692 1.964 1.188 5.299 2.242 6.984-1.373 1.334-3.84.227-5.677.14-1.753 2.77 3.421 3.291 5.642 2.636.608-.18 1.663-1.091 1.807-1.5.616-1.734-.628-2.494-1.268-3.118-1.42-1.384-1.747-3.31-2.746-5.142zm10.549 1.81c-.134-.017-.295.032-.488.172-.125 4.616 3.305 8.437 5.863 11.52 1.25 1.505 2.758 2.363 1.371 4.701-2.236.85-5.856 3.286-8.965 2.754-1.65-.282-1.279-2.154-1.871-3.172-1.137 1.496-.69 3.761.48 4.78 5.48.541 9.21-1.796 12.553-3.944-.133-.842 1.012-2.36.694-3.627-.11-.436-1.101-1.068-1.704-1.727-2.452-2.675-5.814-6.67-7.15-9.796-.12-.28-.202-1.584-.783-1.66zm-44.742 3.715c.157.72.317 1.448.195 2.057-.103.516-.803 1.176-.943 1.512-1.79 4.267-.355 9.878 1.713 12.91 1.25 1.832 3.32 3.457 6.05 3.888.109 1.635.503 3.043 1.258 4.7.478 1.047 2.263 2.93 1.606 4.267-.331.674-3.238 2.139-4.202 2.717-3.254 1.953-5.614 3.149-8.619 5.313-1.944 1.399-4.985 1.578-4.506 4.806.324 2.179 1.564 4.878 2.274 7.063.767 2.357 1.867 4.516 2.498 6.963.766 2.97 1.191 5.846 1.484 8.71-.131-.13-.27-.252-.4-.384-7.877-8.058-12.752-19.185-12.752-31.492 0-12.31 4.875-23.437 12.752-31.497a41.351 41.351 0 0 1 1.592-1.533zm60.758 2.453c7.365 7.977 11.894 18.724 11.894 30.577a45.024 45.024 0 0 1-6.65 23.609c-3.095.15-6.65 1.791-9.026 2.973 2.013-5.296 3.745-10.785 5.52-16.725.53-1.78 1.579-4.302 1.344-6.147-.22-1.733-2.924-3.556-4.348-4.93-.79-.762-4.48-3.562-4.693-4.61-.208-1.014 1.504-3.311 2.054-4.46.79-1.644 1.356-3.656 1.746-5.025 1.309-4.6 2.08-9.976 2.159-15.262zm-54.995 2.467c-1.267-.02-2.416.817-2.687 2.785.562-.369 1.016-1.415 2.03-.918-.89 1.738-.676 5.12.534 6.22-.007-2.062-.329-5.588 1.43-5.481 1.23.075 1.48 2.71 2.527 3.308.723-3.478-1.721-5.882-3.834-5.914zM90.66 44.104c-2.673 1.219-4.83 2.996-8.322 3.332-.17.576-.097 2.031-.004 2.988 4.568-.095 6.77-3.358 8.326-6.32zm-21.885 1.921c1.335 3.573 7.354 4.832 12.444 4.579-.008-1.058-.003-2.131-.215-2.999-3.96.116-9.315-.048-12.229-1.58zm-.552 2.856c-2.574.003-.403 1.436.033 1.996.902 1.16 1.96 3.138 3.607 4.014 2.598 1.38 7.76.802 9.631.04.693-.28 1.249-1.057 1.506-1.714-5.84.14-12.763.722-14.777-4.336zm19.435 9.832c2 1.61 3.21 3.127 5.127 4.85 1.041.932 3.088 2.05 3.295 3.558.116.843-.402 2.905-.592 3.852-.84 4.154-2.73 9.643-4.529 13.996-.654 1.582-1.279 3.56-2.143 3.902-2.363.936-5.233-.09-7.242 1.16 2.7-4.685 5.639-9.11 8.285-13.851-.403-.941-1.39-1.342-1.677-2.389 1.858-3.51 1.004-14.403-3.739-12.103.664-.974 2.404-1.778 3.215-2.975zm-41.722 2.48c.43-.17 3.576 3.923 4.04 4.254 2.55 1.81 5.717 3.24 8.678 4.653.181 1.359.601 3.12 1.338 5.476.813 2.602 1.484 6.274 4.922 4.399-.327 1.485-2.236 2.408-1.709 4.14.33 1.088 3.937 2.431 5.082 3.076 2.112 1.19 4.039 1.848 5.66 2.543-7.37.203-14.29.802-21.101 1.729-.816-1.264-.489-3.212-.575-5.225-.094-2.185.815-7.114-.044-7.42-.971-.345-1.152 1.624-1.186 2.057-.182 2.309 1.097 7.197-.166 9.959-1.382-.39-2.062-1.431-3.357-1.902-.508 1.6 1.052 1.677.892 2.693-.212 1.343-2.758.22-2.744 2.217 1.657.265 4.2-.514 5.97.232.464 5.433 1.208 10.58 2.024 16.352-7.048-.366-11.612-3.868-16.806-6.297-.324-11.49-2.154-23.41-6.688-33.139 4.756-3.67 10.078-7.552 15.77-9.797zm39.082 2.625c.315.016.612.094.882.252 1.033.602 1.471 4.035 1.551 5.705.067 1.386-.125 2.784-.69 3.518-2.901-.085-5.522-.43-7.818-1.078.156-.941-.136-1.865.098-2.543.64-.46 1.713-.452 2.68-.56-.837-.412-2.012-.574-2.977-.337-.022-.653-.315-1.059-.492-1.57 1.428-.51 4.555-3.495 6.766-3.387zm-5.202.127c-1.217.795-2.254 1.786-3.423 2.635-2.593.128-4.008-.179-5.913-1.668.032-.12.222-.066.229-.213 2.776 1.237 6.305-.503 9.107-.754zm-27.347.05c1.447 1.004 4.248.756 6.379 1.13.11.682-.442 1.58-.432 2.531-1.794-.11-7.428-2.159-5.947-3.662zm9.773.571c.155-.003.322.013.5.047 2.305.44 4.984 1.5 6.768 2.475 1.09.596 1.72 1.334 3.375 1.46l-.026.663c-.906.595-2.369.588-3.363 1.088 1.466.064 2.62.418 3.62.916-.023.553-.046 1.105-.067 1.658-1.66 1.137-3.178 2.83-5.133 3.897-.925.504-4.169 1.801-5.152 1.572-.557-.13-.606-.82-.828-1.47-.474-1.395-1.565-3.615-1.66-5.714-.114-2.485-.357-6.544 1.966-6.592zm13.293 3.463c.138-.01.268-.006.39.012 2.127.313 1.974 4.722-1.39 3.67-.253-1.444-.547-1.856-.433-3.115.541-.361 1.02-.534 1.433-.567zm1.936 5.016c1.218.13 2.184 1.81 3.922 1.7-.279 4.53-.134 9.08-1.399 13.232-2.357-4.322-3.743-9.54-6.795-13.217.323-.342.61-.723.926-1.073 1.382.578 2.283-.756 3.346-.642zm7.01 1.441c1.677-.013 3.05 1.084 3.806 2.297-2.364 4.05-4.627 8.208-7.432 11.78 1.176-3.458 1.68-9.245 1.858-13.657a4.225 4.225 0 0 1 1.767-.42zm-6.335 1.301a.943.943 0 0 0-.892.942.94.94 0 1 0 .94-.941c-.017 0-.031-.002-.048 0zm-6.435.242c2.8 3.555 4.503 8.126 6.379 12.537-4.432-1.336-8.96-3.503-12.844-5.7.763-3.305 3.751-5.017 6.465-6.837zm7.375 4.12a.941.941 0 1 0 .049 0h-.05zm22.135 7.609c1.216.03 2.425 1.017 2.955 1.818.955 1.444 1.848 5.696 2.35 7.953.746 3.36-.932 6.63-3.602 7.278-1.944.472-4.926.595-6.2-.02 1.559-.851 3.898-.855 5.702-1.44-2.583-1.112-6.406-.064-9.512-.257-.375-3.836-.657-7.993-1.566-11.02 1.813-1.927 6.193-2.39 8.68-3.982a2.07 2.07 0 0 1 1.193-.33zm-.211 3.578c-3.183.093-5.671.937-7.09 2.937 2.582.166 4.443-2.407 7.09-2.937zm-12.541.785a3.7 3.7 0 0 1 .662.084c1.692 2.91 2.054 7.747 1.998 11.26-1.054.203-1.739.807-3.02.767-.326-4.001-1.254-8.207-1.636-12.02.61-.011 1.319-.12 1.996-.09zm-19.602.043c3.341-.054 6.58.143 9.385.727.684 4.453.43 8.844.93 13.209.662 5.807.167 12.433 1.3 17.875-6.172 1.913-14.59 1.73-21.574-.391-3.146-9.642-4.862-18.797-6.047-29.686 4.588-.858 10.438-1.644 16.006-1.734zm14.824.383c1.104 3.987 1.037 9.06 1.579 13.568-1.669.366-2.888.545-4.684.815-.357-4.683-.628-9.295-.565-13.971 1.272-.426 2.395-.4 3.67-.412zm14.487 2.297c-1.26.016-2.394.291-2.88 1.033 2.189.18 4.722-.17 6.88-.398-.984-.34-2.573-.653-4-.635zm-.362 3.24c-1.127.014-2.123.228-2.634.777 2.304.194 5.32.24 7.744.188-.983-.458-3.23-.988-5.11-.965zM83.098 108.82c.235-.037.45-.045.627.002.347 3.045 1.555 6.132 1.404 9.467-1.34.452-2.11.846-3.906.844-.127-2.834-.506-7.166-.393-9.867.663.044 1.56-.334 2.268-.446z"></path>
    </svg>
  )
}

export { Jenkins }
