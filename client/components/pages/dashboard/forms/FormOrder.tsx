import React, { useRef } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Order } from "../Datatables/definitions/orders/AllOrdersColumn";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const FormOrder = ({ order }: { order: Order }) => {

  const ref = useRef<HTMLFormElement>(null)

  const formSchema = z.object({
    name: z.string().min(2).max(50),
    note: z.string().max(50).optional(),
    table: z.string(),
    code: z.string().optional(),
    total: z.string().transform((value) => {
      const number = parseFloat(value.toString().replace("$", ""));
      return number;
    }),
    date: z.string(),
    status: z.enum(["pending", "processing", "paid"]),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: order,
  });

  const onSubmit = () => {};
   
  return (
    <Form {...form}>
      <form
        ref={ref}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 grid  align-baseline w-[90%]"
      >
        <FormField
          control={form.control}
          name="name"
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
            
       <div className="flex justify-center gap-2">
       <FormField
          control={form.control}
          name="table"
          render={({ field }) => (
            <FormItem className="w-[50%]">
              <FormLabel>Mesas</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent
                >
                  <SelectItem value="Table 1">mesa 1</SelectItem>
                  <SelectItem value="Table 2">mesa 2</SelectItem>
                  <SelectItem value="Table 3">mesa 2</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          disabled
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="w-[50%]">
                
                <FormLabel>Mesas</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="pending">pendiente</SelectItem>
                  <SelectItem value="paid">pagado</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
       </div>

     <div className="flex gap-2">
     <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem className="w-[50%]">
              <FormLabel>Codigo</FormLabel>
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

        <FormField
          disabled
          control={form.control}
          name="total"
          render={({ field }) => (
            <FormItem className="w-[50%]">
              <FormLabel>Total</FormLabel>
              <FormControl>
                <Input
                  placeholder="shadcn"
                  {...field}
                  value={`${field.value}$`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
     </div>

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

        <Button  className="w-full" type="submit">
          Actualizar
        </Button>
      </form>
    </Form>
  );
};

export default FormOrder;
