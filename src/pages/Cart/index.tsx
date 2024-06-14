import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { 
    AddressContainer, 
    AddressFormContainer, 
    CartContainer, 
    Heading, 
    InfoContainer, 
    Input, 
    Option, 
    OrderInfoContainer, 
    PaymentContainer, 
    PaymentOptions 
} from "./styles";
import { useTheme } from "styled-components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const orderCheckoutFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP").max(8, "CEP inválido"),
    street: zod.string().min(1, "Informe a rua"),
    number: zod.string().min(1, "Informe o número"),
    complement: zod.string().optional(),
    neighborhood: zod.string().min(1, "Informe o bairro"),
    city: zod.string().min(1, "Informe a cidade"),
    state: zod.string().min(1, "Informe o estado").max(2, "Informe a sigla do estado"),
    paymentMethod: zod.enum(["credit", "debit", "cash"])
})

type orderCheckoutData = zod.infer<typeof orderCheckoutFormValidationSchema>

export function Cart() {
    const theme = useTheme()
    const { register, handleSubmit, watch } = useForm<orderCheckoutData>({
        resolver: zodResolver(orderCheckoutFormValidationSchema),
        defaultValues: {
            cep: '',
            street: '',
            number: '',
            complement: '',
            neighborhood: '',
            city: '',
            state: ''
        }
    })

    const selectedPaymentMethod = watch('paymentMethod')

    function handleOrderCheckout(data: orderCheckoutData) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(handleOrderCheckout)}>
            <CartContainer>
                <InfoContainer>
                    <h2>Complete seu pedido</h2>
                    <OrderInfoContainer>
                        <AddressContainer>
                            <Heading>
                                <MapPin 
                                    size={22} 
                                    color={theme["yellow-dark"]}
                                />
                                <div>
                                    <span>Endereço de Entrega</span>
                                    <p>Informe o endereço onde deseja receber o seu pedido</p>
                                </div>
                            </Heading>

                            <AddressFormContainer>
                                <Input 
                                    type="number" 
                                    placeholder="CEP" 
                                    className="cep"
                                    {...register('cep')}
                                />
                                <Input 
                                    type="text" 
                                    placeholder="Rua" 
                                    className="street"
                                    {...register('street')}
                                />
                                <Input 
                                    type="number" 
                                    placeholder="Número" 
                                    className="number"
                                    {...register('number')}
                                />
                                <Input 
                                    type="text" 
                                    placeholder="Complemento" 
                                    className="complement" 
                                    {...register('complement')}
                                />
                                <Input 
                                    type="text" 
                                    placeholder="Bairro" 
                                    className="neighborhood"
                                    {...register('neighborhood')}
                                />
                                <Input 
                                    type="text" 
                                    placeholder="Cidade" 
                                    className="city"
                                    {...register('city')}
                                />
                                <Input 
                                    type="text" 
                                    placeholder="UF" 
                                    className="state"
                                    {...register('state')}
                                />
                            </AddressFormContainer>
                        </AddressContainer>

                        <PaymentContainer>
                            <Heading>
                                <CurrencyDollar size={22} color={theme.purple}/>
                                <div>
                                    <span>Pagamento</span>
                                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                </div>
                            </Heading>
                            
                            <PaymentOptions>
                                <Option className={selectedPaymentMethod === 'credit' ? "selected" : ""}>
                                    <input 
                                        type="radio"
                                        {...register('paymentMethod')}
                                        value="credit"
                                    />
                                    <CreditCard size={16}/>
                                    <span>Cartão de Crédito</span>
                                </Option>
                                <Option className={selectedPaymentMethod === 'debit' ? 'selected' : ''}>
                                    <input 
                                        type="radio"
                                        {...register('paymentMethod')}
                                        value="debit"
                                    />
                                    <Bank size={16}/>
                                    <span>Cartão de Débito</span>
                                </Option>
                                <Option className={selectedPaymentMethod === 'cash' ? 'selected' : ''}>
                                    <input 
                                        type="radio"
                                        {...register('paymentMethod')}
                                        value="cash"
                                    />
                                    <Money size={16}/>
                                    <span>Dinheiro</span>
                                </Option>
                            </PaymentOptions>
                        </PaymentContainer>
                    </OrderInfoContainer>
                </InfoContainer>

                <InfoContainer>
                    <h2>Cafés selecionados</h2>
                    <div>
                        <button type="submit">Confirmar pedido</button>
                    </div>
                </InfoContainer>
            </CartContainer>
        </form>
    )
}