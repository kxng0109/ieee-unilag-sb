import Stat from "./Stat";
type arrayStat = {
  label:string,
  users:string
}
const statArray: arrayStat[]= [{users:"500+",label: "Active Members"},
  {users:"120+",label:"Events Anually"},
  {users:"15",label:"Technical Societies"},
  {users:"Global",label: "Active Members"}
]
function Stats() {
  return (
    <div className="flex flex-wrap justify-center gap-6 items-center py-10">
      {statArray.map((item, index) => {
        return (
          <Stat key={index} label={item.label} users={item.users} />
        )
      })}
    </div>
  )
}
export default Stats;