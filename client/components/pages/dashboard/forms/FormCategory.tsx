import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Category } from '../Datatables/definitions/category/AllCategoriesColumn';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const FormCategory = ({category}: {category?:Category}) => {

    const formSchema = z.object({
         title: z.string()
      });
    
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: category,
      });
    
      const onSubmit = (data:z.infer<typeof formSchema>) => {
        data
      }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 grid  align-baseline w-[90%]"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input
                  
                  placeholder="shadcn"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          

        <Button  className="w-full" type="submit">
          {category?.id ? "Actualizar":"Crear"}
        </Button>
      </form>
    </Form>
  )
}

export default FormCategory