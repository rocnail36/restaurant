import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import React from 'react'
import { User } from '../Datatables/users/lastRegisterColumn'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { userFormInitialValues } from '@/constant/form/useForm'


const UserSchema = z.object({
    password: z.string(),
    name: z.string(),
    email: z.string().email(),
    role:z.enum(["admin","mesero"]),
   
})

const FormUser = ({user}:{user?:User}) => {

    const form = useForm({
        resolver: zodResolver(UserSchema),
        defaultValues: {...user,password:""} || userFormInitialValues
    })


    const onSubmit = () => {

    }

  return (
    
    <Form {...form}>
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 grid  align-baseline w-[90%]"
    >
  
          
     <div className="flex justify-center gap-2">
     <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className='w-[50%]'>
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
     <FormField
        control={form.control}
        name="role"
        render={({ field }) => (
          <FormItem className="w-[50%]">
            <FormLabel>Rol</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Rol" />
                </SelectTrigger>
              </FormControl>
              <SelectContent
              >
                <SelectItem value="admin">Administrador</SelectItem>
                <SelectItem value="mesero">Mesero</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />


     </div>

 
   <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="w-[100%]">
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                placeholder="opcional"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

     
        {
          !user?.id &&  <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-[100%]">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="xxxx"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        }
        
   

  


      <Button  className="w-full" type="submit">
        {user?.id ? "Actualizar": "Crear"}
      </Button>
    </form>
  </Form>
  )
}

export default FormUser