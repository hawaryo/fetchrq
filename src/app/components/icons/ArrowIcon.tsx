interface Props {
  rotate: number;
  isdisabled?: boolean;
}

export default function ArrowIcon({ rotate, isdisabled }: Props) {
  return (
    <>
      {/* prettier-ignore */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 46" width={60} height={60} className={`rotate-${rotate}`}>
        <circle cx="23.5" cy="23.5" r="22.5" fill={isdisabled?"#D9D9D9":"#A1FF94"} />
         <path fill="#000" d="M34.9608 24.2937c.6535-.6535.6535-1.7148 0-2.3683l-8.365-8.365c-.6535-.6535-1.7148-.6535-2.3683 0-.6535.6536-.6535 1.7149 0 2.3684l5.5104 5.5104H10.3573c-.92536 0-1.67297.7476-1.67297 1.673s.74761 1.673 1.67297 1.673h19.3806l-5.5104 5.5104c-.6535.6535-.6535 1.7148 0 2.3683s1.7148.6535 2.3683 0l8.365-8.3649v-.0053Z"/>
      </svg>
    </>
  );
}
