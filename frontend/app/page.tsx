import {Events} from "./upcoming-events" ;
import { EventsProvider } from '@/lib/contexts';

export default function Home() {
  return (
    <EventsProvider>
      <Events />
    </EventsProvider>
  );
}
