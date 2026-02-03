
type StatDes = {
 label: string;
 users: string;
}
function Stat({ label, users }: StatDes) {
  return (
    <div className={`font-sans flex flex-col h-[177px] w-full max-w-[300px] rounded-3xl border-[3px] p-2.5 justify-center text-center border-[#E2E8F0]`}>
      <span className="text-[40px] md:text-[56px] font-bold text-[#00629B] leading-none">{users}</span>
      <span className="text-[16px] md:text-[20px] font-medium text-[#475569] mt-2">{label}</span>
    </div>
  );
}

export default Stat;