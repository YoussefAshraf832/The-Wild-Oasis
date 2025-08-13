import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  const numBookings = bookings?.length;

  const sales = formatCurrency(
    bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)
  );

  const checkins = confirmedStays?.length;

  const occupation = confirmedStays.reduce((acc, cur) => acc + cur.numNight, 0);

  const Occupancy =
    Math.round((occupation / (numDays * cabinsCount)) * 1000) / 10;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />

      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={sales}
      />

      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />

      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Occupancy + "%"}
      />
    </>
  );
}

export default Stats;
