import React, { useEffect, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { Button } from "@/components/ui/button";
  import { Calendar } from "@/components/ui/calendar";
  import { CalendarIcon } from "lucide-react";
  import { cn } from "@/lib/utils";
  import { format } from "date-fns";
import { useDataPicker } from './hooks/useDataPicker';
import { DateFromTo } from '../types/DateFromTo';



const DatePicker = ({className,setFilterDate}:{className?:string,setFilterDate:(value:DateFromTo) => void}) => {

    const [date, setDate] = React.useState<DateFromTo>({from:undefined,to:undefined});
    const  {isOpen:isOpen1,switchDataPicker:openDataPicker1,closeDataPicker:closeDataPicker1} = useDataPicker()
    const  {isOpen:isOpen2,switchDataPicker:openDataPicker2,closeDataPicker:closeDataPicker2} = useDataPicker()

    useEffect(() => {
       
      
        setFilterDate(date)
    },[date])

   return <div className={cn("flex gap-4", className)}>
       <Popover open={isOpen1}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[180px] justify-start text-left font-normal",
                  !date.from && "text-muted-foreground"
                )}
                onClick={openDataPicker1}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date.from ? format(date.from, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date.from}
                onSelect={(e) => {setDate({...date, from: e})
                  closeDataPicker1()
                }}
                initialFocus
                ISOWeek
              />
              <button onClick={() => {
                setDate({...date,from:undefined})
                closeDataPicker1()
              }} 
              className='rounded-sm shadow-md ml-2 mb-2 px-2 text-red-400'>limpiar</button>
            </PopoverContent>
          </Popover>

          <Popover open={isOpen2}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[180px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
                onClick={openDataPicker2}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date.to ? format(date.to, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                ISOWeek
                mode="single"
                selected={date.to}
                onSelect={(e) => {
                    setDate({...date,to:e})
                    closeDataPicker2()
                }}
                initialFocus
              />
              <button onClick={() => {
                setDate({...date,to:undefined})
                closeDataPicker2()
              }}
              className='rounded-sm shadow-md ml-2 mb-2 px-2 text-red-400'>Limpiar</button>
            </PopoverContent>
          </Popover>
    </div>
}

export default DatePicker