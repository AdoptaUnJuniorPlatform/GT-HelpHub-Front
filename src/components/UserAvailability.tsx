interface UserAvailabilityProps {
  preferredTimeRange: string; 
}

function UserAvailability({ preferredTimeRange }: UserAvailabilityProps) {
  return (
    <span className="flex justify-center items-center w-[10rem] h-[2.9rem] rounded-md flex-shrink-0 border-2 border-black-50 text-base font-normal leading-normal tracking-wide text-neutral-black">{preferredTimeRange}</span>
  )
}

export default UserAvailability