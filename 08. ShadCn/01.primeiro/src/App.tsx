import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Calendar } from './components/ui/calendar';
import type { DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';
import { Card, CardContent } from './components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';
import { ChevronDownIcon } from 'lucide-react';

function App() {
  const classTC = `        
    h-12 px-6
    bg-linear-to-b from-indigo-400 to-indigo-700
    text-white font-semibold
    shadow-md shadow-indigo-500/40
    hover:from-indigo-500 hover:to-indigo-800
    active:translate-y-px
    active:shadow-sm
    transition-all
    rounded-md
  `;

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  });
  const [date, setDate] = useState<Date>();

  return (
    <div className='flex min-h-svh flex-col items-center justify-center'>
      <Button className={classTC} variant={'default'}>
        Click me
      </Button>

      <Card className='mx-auto w-fit p-0'>
        <CardContent className='p-0'>
          <Calendar
            mode='range'
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
            disabled={(date) => date > addDays(new Date(), 60) || date < addDays(new Date(), -5)}
          />
        </CardContent>
      </Card>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            data-empty={!date}
            className='data-[empty=true]:text-muted-foreground w-53 justify-between text-left font-normal'
          >
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar mode='single' selected={date} onSelect={setDate} defaultMonth={date} />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default App;
