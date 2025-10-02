interface Props {
  rotate: number;
  isdisabled?: boolean;
}

export default function ArrowIcon({ rotate, isdisabled }: Props) {
  return (
    <>
      {/* prettier-ignore */}
      <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" fill="none" style={{transform:`rotate(${rotate}deg)`}}>
        <circle cx="25.371" cy="25.125" r="25"  fill={isdisabled?"#D9D9D9":"#A1FF94"} />
        <path d="M39.697 26.438a1.86 1.86 0 0 0 0-2.631l-9.294-9.294a1.86 1.86 0 1 0-2.631 2.632l6.123 6.123H12.36c-1.028 0-1.859.831-1.859 1.859s.831 1.859 1.859 1.859h21.534l-6.123 6.123a1.86 1.86 0 1 0 2.631 2.631l9.294-9.294v-.006z" fill="#000" />
      </svg>
    </>
  );
}