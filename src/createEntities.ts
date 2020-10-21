import dayjs from "dayjs";
import { EventInterface } from "./EventInterface";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

/* 
 Den här lösningen är ju inte helt magiskt dels eftersom man måste iterera över all data,
 vilket kan bli ganska mycket beroende på hur det ser ut,
 och dels för att man introducerar variabler som inte finns på servern och det kan
 leda till lite svårhittade buggar senare. Kommer finnas en skillnad på server truth och client truth
 Sen måste den här funktionen sen wrappa all calls till servern, t.ex. sen när man ska posta data och refresha 
 clienten.
 Men den löser ju faktiskt uppgiften väldigt smidigt.
 Vyerna slipper ha för mycket logik, man slipper ha logik när man renderar ut varje element
 som annars hade kunnat kolla efter start/end times. Men det blir ofta fult och kan skapa lite problem med
 rendering senare. Skönt ändå att ha ett enhetligt state genom hela klienten, även om det skiljer sig från servern.
*/

function createEntities(events: EventInterface[]): EventInterface[] {
  const entities = events.reduce<EventInterface[]>((acc, next) => {
    const { startDate, endDate } = next;
    const start = dayjs(startDate, "YYYY-M-DD HH:mm");
    const end = dayjs(endDate, "YYYY-M-DD HH:mm");
    if (start.date() !== end.date()) {
      const clone = { ...next, isDuplicate: true };
      return [...acc, { ...next, hasDuplicate: true }, clone];
    }
    return [...acc, next];
  }, []);
  return entities;
}

export default createEntities;
