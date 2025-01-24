import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner'
import { Link, useSearchParams } from 'react-router-dom'
import { signIn } from '../../api/sign-in';
import { useMutation } from '@tanstack/react-query';

const sigInForm = z.object({
    email: z.string().email()
})

type SignInForm = z.infer<typeof sigInForm>

export function SignIn() {
    const [ searchParams ] = useSearchParams()

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>({
        defaultValues: {
            email: searchParams.get('email') ?? ''
        }
    })

    const { mutateAsync: authenticate } = useMutation({ 
        mutationFn: signIn,
    })

    async function handleSignIn(data: SignInForm) {
        try {
            // await new Promise(resolve => setTimeout(resolve, 2000))

            await authenticate({ email: data.email })

            toast.success('Enviamos um link de autorização para o seu e-mail', {
                action: {
                    label: 'Reenviar',
                    onClick: () => handleSignIn(data)
                }
            })

            console.log(data)
            
        } catch {
            toast.error('Credenciais inválidas')
        }
    }

    return (
      <>
        <Helmet title='Login' />
        <div className='p-8'>
            <Button variant='ghost'
                    asChild 
                    className='absolute top-8 right-8'
            >
                <Link to='/sign-up' >
                    Novo estabelecimento
                </Link>
            </Button>
            <div className='w-[350px] flex flex-col justify-center gap-6'>
                <div className='flex flex-col gap-2 text-center'>
                    <h1 className='text-2xl font-semibold tracking-tight'>Acessar Painel</h1>
                    <p className='text-sm text-muted-foreground'>Acompanhe suas vendas pelo painel do parceiro !</p>
                </div>

                <form className='space-y-4' onSubmit={handleSubmit(handleSignIn)}>
                    <div className='space-y-2'>
                        <Label htmlFor='email'>Seu e-mail</Label>
                        <Input 
                            id='email' 
                            type='email'
                            {...register('email')}
                        />
                    </div>
                    <Button className='w-full' type='submit' disabled={ isSubmitting } >Acessar Painel</Button>
                </form>

            </div>
        </div>
      </>
    );
  }