import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Code } from '../Datatables/definitions/codes/allCodesColumn';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const FormCode = ({code}:{code?:Code}) => {
  const formSchema = z.object({
    id: z.string(),
    code: z.string(),
    discount: z.coerce.number()
 });

 const form = useForm<z.infer<typeof formSchema>>({
   resolver: zodResolver(formSchema),
   defaultValues: code
 });

 const onSubmit = () => {};

  return (<Form {...form}>
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 grid  align-baseline w-[90%]"
    >
      <FormField
        control={form.control}
        name="code"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Code</FormLabel>
            <FormControl>
              <Input 
                
                placeholder=""
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control}
        name="discount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>descuento</FormLabel>
            <FormControl>
              <Input 
                
                placeholder=""
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />  
      <Button  className="w-full" type="submit">
        {code?.id ? "Actualizar":"Crear"}
      </Button>
    </form>
  </Form>
  )
}

export default FormCode