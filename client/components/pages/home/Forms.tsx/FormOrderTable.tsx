import React from 'react'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const formSchema = z.object({
    userName: z.string().min(2).max(50),
    note: z.string().max(50).optional(),
    tables: z.string(),
    code: z.string().optional(),
    products: z.object({hola:z.string()}).array()
  });


const FormOrderTable = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            code:"",
            note:"",
            userName:"",
        }
    })

    const onSubmit = () => {

    }

    const array = Array.from({length:9})

  return (
    <div className='w-full px-4'>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:ring-red-400"
                    placeholder="shadcn"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Codigo</FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:ring-red-400"
                    placeholder="opcional"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nota</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="opcional"
                    className="resize-none focus-visible:ring-red-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

         <FormField
            control={form.control}
            name="tables"
            render={({ field }) => (
              <FormItem className="space-y-3 ">
                <FormLabel>Mesa</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid space-y-1 grid-cols-3 sm:grid-cols-4 justify-items-center  items-center max-h-[200px] overflow-y-scroll"
                  >

                 {array.map(item => (
                       <FormItem className="flex flex-col justify-center gap-2 aspect-square  h-[75px] bg-green-400 items-center space-y-0 border-red-400 border-2">
                       <FormLabel className="font-normal">Mesa 1</FormLabel>
                         <FormControl className="">
                         <RadioGroupItem
                          className="border-red-800 bg-white text-red-700"
                          value="cash"
                        />
                         </FormControl>
                       </FormItem>
                 ))}

                
                   
                  
                  
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default FormOrderTable