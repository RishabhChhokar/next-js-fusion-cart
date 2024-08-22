'use client'
import CheckoutSteps from '@/components/CheckoutSteps'
import useCartService from '@/lib/hooks/useCartStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSession } from "next-auth/react";
const Form = () => {
  const router = useRouter();

  const { data: session, status } = useSession()
  const { saveShippingAddress, shippingAddress } = useCartService()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
    },
  })

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      router.push('/signin')
    } else {
      setValue('fullName', shippingAddress.fullName)
      setValue('address', shippingAddress.address)
      setValue('city', shippingAddress.city)
      setValue('postalCode', shippingAddress.postalCode)
      setValue('country', shippingAddress.country)
    }
  }, [setValue, shippingAddress, session, status, router])


  const formSubmit = async (form) => {
    saveShippingAddress(form)
    router.push('/payment')
  }

  const FormInput = ({
    id,
    name,
    required,
    pattern,
  }) => (
    <div className="mb-2">
      <label className="label" htmlFor={id}>
        {name}
      </label>
      <input
        type="text"
        id={id}
        {...register(id, {
          required: required && `${name} is required`,
          pattern,
        })}
        className="input input-bordered w-full max-w-sm"
      />
      {errors[id]?.message && (
        <div className="text-error">{errors[id]?.message}</div>
      )}
    </div>
  )

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return ( 
    <div>
      <CheckoutSteps current={1} />
      <div className="max-w-sm mx-auto card bg-base-300 my-4">
        <div className="card-body">
          <h1 className="card-title">Shipping Address</h1>
          <form onSubmit={handleSubmit(formSubmit)}>
            <FormInput name="Full Name" id="fullName" required />
            <FormInput name="Address" id="address" required />
            <FormInput name="City" id="city" required />
            <FormInput name="Postal Code" id="postalCode" required />
            <FormInput name="Country" id="country" required />
            <div className="my-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting && (
                  <span className="loading loading-spinner"></span>
                )}
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Form