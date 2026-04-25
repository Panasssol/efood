import styled from 'styled-components'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../../store'
import {
  removeItem, clear, closeCart, goToDelivery,
  setDelivery, setPayment, setOrder, setCheckoutError,
  backToCart, backToDelivery, finishOrder
} from '../../store/cartSlice'
import type { DeliveryData, PaymentData } from '../../store/cartSlice'

const CHECKOUT_URL = 'https://api-ebac.vercel.app/api/efood/checkout'

/* ===== STYLED COMPONENTS ===== */

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 200;
  opacity: ${p => p.$open ? 1 : 0};
  visibility: ${p => p.$open ? 'visible' : 'hidden'};
  transition: opacity 0.3s, visibility 0.3s;
`

const Sidebar = styled.aside<{ $open: boolean }>`
  position: fixed; top: 0; right: 0; bottom: 0;
  width: 360px; max-width: 100%;
  background: #E66767; color: #FFF8F2; z-index: 201;
  transform: translateX(${p => p.$open ? '0' : '100%'});
  transition: transform 0.35s ease;
  display: flex; flex-direction: column;
  box-shadow: -4px 0 24px rgba(0,0,0,0.2);
`

const Header = styled.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 32px 16px 16px;
  border-bottom: 1px solid rgba(255,248,242,0.2);
`

const Title = styled.h3`font-size:18px;font-weight:900;`

const CloseBtn = styled.button`
  background:none; border:none; color:#FFF8F2; font-size:22px;
  cursor:pointer; width:32px; height:32px;
  display:flex; align-items:center; justify-content:center;
  &:hover{opacity:0.7;}
`

const Content = styled.div`
  flex:1; overflow-y:auto; padding:16px;
  display:flex; flex-direction:column; gap:16px;
`

const CartItemCard = styled.li`
  display:flex; gap:8px; background:#FFF8F2; color:#E66767;
  border-radius:8px; padding:8px; position:relative; list-style:none;
`

const ItemImg = styled.img`width:80px;height:80px;object-fit:cover;border-radius:4px;flex-shrink:0;`

const ItemInfo = styled.div`flex:1;display:flex;flex-direction:column;justify-content:space-between;min-width:0;`

const ItemName = styled.h4`font-size:18px;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`

const ItemPrice = styled.span`font-size:14px;font-weight:700;`

const RemoveBtn = styled.button`
  position:absolute;bottom:8px;right:8px;background:none;border:none;
  cursor:pointer;padding:4px;display:flex;&:hover{opacity:0.6;}
`

const Footer = styled.div`
  padding:16px;
  border-top: 1px solid rgba(255,248,242,0.2);
`

const TotalRow = styled.div`
  display:flex;justify-content:space-between;font-size:14px;font-weight:700;margin-bottom:16px;
`

const Btn = styled.button<{ $outline?: boolean }>`
  width:100%; border-radius:4px; font-size:14px; font-weight:700;
  padding:4px 0; cursor:pointer; margin-bottom:8px;
  transition: background 0.2s, color 0.2s;

  background: ${p => p.$outline ? 'transparent' : '#FFF8F2'};
  color: ${p => p.$outline ? '#FFF8F2' : '#E66767'};
  border: ${p => p.$outline ? '1px solid #FFF8F2' : 'none'};

  &:hover {
    background: #FFF8F2;
    color: #E66767;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const EmptyMsg = styled.p`text-align:center;font-size:16px;font-weight:300;padding:40px 0;opacity:0.8;`

const FormGroup = styled.div`margin-bottom:12px;`

const Label = styled.label`display:block;font-size:14px;font-weight:700;margin-bottom:4px;`

const Input = styled.input`
  width:100%; padding:8px; border:none; border-radius:4px;
  font-size:14px; color:#333; background:#FFF8F2;
  &::placeholder{color:#999;}
  &:focus{outline:2px solid #FFF8F2;}
`

const Row = styled.div`display:flex;gap:12px;`

const ConfirmBox = styled.div`
  text-align:center; padding:24px 0;
  h3{font-size:18px;font-weight:900;margin-bottom:16px;}
  p{font-size:14px;font-weight:300;line-height:22px;margin-bottom:8px;}
  strong{font-weight:700;}
`

const ErrorText = styled.p`color:#FFD700;font-size:13px;margin-bottom:8px;font-weight:700;`

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E66767" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
    <path d="M10 11v6"/><path d="M14 11v6"/>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>
)

const formatPrice = (v: number) => `R$ ${v.toFixed(2).replace('.', ',')}`

/* ===== DELIVERY FORM ===== */

const DeliveryForm = () => {
  const dispatch = useDispatch()
  const saved = useSelector((s: RootState) => s.cart.delivery)
  const [form, setForm] = useState<DeliveryData>(saved)
  const [errors, setErrors] = useState<string[]>([])

  const change = (field: keyof DeliveryData, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const submit = () => {
    const missing: string[] = []
    if (!form.receiver.trim()) missing.push('Quem irá receber')
    if (!form.address.trim()) missing.push('Endereço')
    if (!form.city.trim()) missing.push('Cidade')
    if (!form.zipCode.trim()) missing.push('CEP')
    if (!form.number.trim()) missing.push('Número')
    if (missing.length) { setErrors(missing); return }
    dispatch(setDelivery(form))
  }

  return (
    <>
      <Content>
        <h3 style={{fontSize:16,fontWeight:900}}>Entrega</h3>
        {errors.length > 0 && <ErrorText>Preencha: {errors.join(', ')}</ErrorText>}
        <FormGroup>
          <Label>Quem irá receber</Label>
          <Input value={form.receiver} onChange={e => change('receiver', e.target.value)} placeholder="Nome completo" />
        </FormGroup>
        <FormGroup>
          <Label>Endereço</Label>
          <Input value={form.address} onChange={e => change('address', e.target.value)} placeholder="Rua, Avenida..." />
        </FormGroup>
        <FormGroup>
          <Label>Cidade</Label>
          <Input value={form.city} onChange={e => change('city', e.target.value)} placeholder="Sua cidade" />
        </FormGroup>
        <Row>
          <FormGroup style={{flex:1}}>
            <Label>CEP</Label>
            <Input value={form.zipCode} onChange={e => change('zipCode', e.target.value)} placeholder="00000-000" />
          </FormGroup>
          <FormGroup style={{flex:1}}>
            <Label>Número</Label>
            <Input value={form.number} onChange={e => change('number', e.target.value)} placeholder="000" />
          </FormGroup>
        </Row>
        <FormGroup>
          <Label>Complemento (opcional)</Label>
          <Input value={form.complement} onChange={e => change('complement', e.target.value)} placeholder="Apto, bloco..." />
        </FormGroup>
      </Content>
      <Footer>
        <Btn onClick={submit}>Continuar com o pagamento</Btn>
        <Btn $outline onClick={() => dispatch(backToCart())}>Voltar para o carrinho</Btn>
      </Footer>
    </>
  )
}

/* ===== PAYMENT FORM ===== */

const PaymentForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { items, delivery, error: apiError } = useSelector((s: RootState) => s.cart)
  const [form, setForm] = useState<PaymentData>({ cardName:'', cardNumber:'', cvv:'', expMonth:'', expYear:'' })
  const [errors, setErrors] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const change = (field: keyof PaymentData, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const submit = async () => {
    const missing: string[] = []
    if (!form.cardName.trim()) missing.push('Nome no cartão')
    if (!form.cardNumber.trim()) missing.push('Número do cartão')
    if (!form.cvv.trim()) missing.push('CVV')
    if (!form.expMonth.trim()) missing.push('Mês')
    if (!form.expYear.trim()) missing.push('Ano')
    if (missing.length) { setErrors(missing); return }

    dispatch(setPayment(form))
    setLoading(true)

    const body = {
      products: items.map(i => ({ id: i.id, price: i.preco })),
      delivery: {
        receiver: delivery.receiver,
        address: {
          description: delivery.address,
          city: delivery.city,
          zipCode: delivery.zipCode,
          number: Number(delivery.number) || 0,
          complement: delivery.complement
        }
      },
      payment: {
        card: {
          name: form.cardName,
          number: form.cardNumber,
          code: Number(form.cvv) || 0,
          expires: {
            month: Number(form.expMonth) || 0,
            year: Number(form.expYear) || 0
          }
        }
      }
    }

    try {
      const res = await fetch(CHECKOUT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      if (!res.ok) throw new Error('Erro ao processar pedido')
      const data = await res.json()
      dispatch(setOrder({ orderId: data.orderId }))
    } catch (err) {
      dispatch(setCheckoutError(err instanceof Error ? err.message : 'Erro desconhecido'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Content>
        <h3 style={{fontSize:16,fontWeight:900}}>
          Pagamento - Valor a pagar {formatPrice(items.reduce((s,i) => s + i.preco * i.quantidade, 0))}
        </h3>
        {errors.length > 0 && <ErrorText>Preencha: {errors.join(', ')}</ErrorText>}
        {apiError && <ErrorText>{apiError}</ErrorText>}
        <FormGroup>
          <Label>Nome no cartão</Label>
          <Input value={form.cardName} onChange={e => change('cardName', e.target.value)} placeholder="Nome como está no cartão" />
        </FormGroup>
        <FormGroup>
          <Label>Número do cartão</Label>
          <Input value={form.cardNumber} onChange={e => change('cardNumber', e.target.value)} placeholder="0000 0000 0000 0000" />
        </FormGroup>
        <FormGroup>
          <Label>CVV</Label>
          <Input value={form.cvv} onChange={e => change('cvv', e.target.value)} placeholder="000" style={{width:100}} />
        </FormGroup>
        <Row>
          <FormGroup style={{flex:1}}>
            <Label>Mês de vencimento</Label>
            <Input value={form.expMonth} onChange={e => change('expMonth', e.target.value)} placeholder="MM" />
          </FormGroup>
          <FormGroup style={{flex:1}}>
            <Label>Ano de vencimento</Label>
            <Input value={form.expYear} onChange={e => change('expYear', e.target.value)} placeholder="AAAA" />
          </FormGroup>
        </Row>
      </Content>
      <Footer>
        <Btn onClick={submit} disabled={loading}>
          {loading ? 'Processando...' : 'Finalizar pedido'}
        </Btn>
        <Btn $outline onClick={() => dispatch(backToDelivery())}>Voltar para a entrega</Btn>
      </Footer>
    </>
  )
}

/* ===== CONFIRMATION ===== */

const Confirmation = () => {
  const dispatch = useDispatch()
  const { order, delivery } = useSelector((s: RootState) => s.cart)

  return (
    <>
      <Content>
        <ConfirmBox>
          <h3>Pedido realizado — {order?.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de preparação e,
            em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar
            cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do pedido,
            garantindo assim sua segurança e bem-estar durante a bytes refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica.
            Bom apetite!
          </p>
          <div style={{marginTop:24,textAlign:'left',background:'rgba(255,248,242,0.15)',borderRadius:8,padding:16}}>
            <p><strong>Nº do pedido:</strong> {order?.orderId}</p>
            <p style={{marginTop:8}}><strong>Entregar para:</strong> {delivery.receiver}</p>
            <p style={{marginTop:4}}>
              <strong>Endereço:</strong> {delivery.address}, {delivery.number}
              {delivery.complement ? ` — ${delivery.complement}` : ''}, {delivery.city} — CEP {delivery.zipCode}
            </p>
          </div>
        </ConfirmBox>
      </Content>
      <Footer>
        <Btn onClick={() => dispatch(finishOrder())}>Concluir</Btn>
      </Footer>
    </>
  )
}

/* ===== CART (ITEMS LIST) ===== */

const CartItems = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((s: RootState) => s.cart)
  const totalPrice = items.reduce((sum, i) => sum + i.preco * i.quantidade, 0)

  return (
    <>
      <Content as="ul" style={{listStyle:'none'}}>
        {items.length === 0 ? (
          <EmptyMsg>O carrinho está vazio.<br/>Adicione itens do cardápio!</EmptyMsg>
        ) : (
          items.map(item => (
            <CartItemCard key={item.id}>
              <ItemImg src={item.foto} alt={item.nome}/>
              <ItemInfo>
                <ItemName>{item.nome}</ItemName>
                <ItemPrice>
                  {item.quantidade > 1 && `${item.quantidade}x `}
                  {formatPrice(item.preco * item.quantidade)}
                </ItemPrice>
              </ItemInfo>
              <RemoveBtn onClick={() => dispatch(removeItem(item.id))}><TrashIcon/></RemoveBtn>
            </CartItemCard>
          ))
        )}
      </Content>
      {items.length > 0 && (
        <Footer>
          <TotalRow>
            <span>Valor total</span>
            <span>{formatPrice(totalPrice)}</span>
          </TotalRow>
          <Btn onClick={() => dispatch(goToDelivery())}>Continuar com a entrega</Btn>
          <Btn $outline onClick={() => dispatch(clear())}>Limpar carrinho</Btn>
        </Footer>
      )}
    </>
  )
}

/* ===== MAIN CART COMPONENT ===== */

const stepTitles: Record<string, string> = {
  cart: 'Carrinho',
  delivery: 'Entrega',
  payment: 'Pagamento',
  confirming: 'Pagamento',
  done: 'Pedido confirmado'
}

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, step, items } = useSelector((s: RootState) => s.cart)
  const totalItems = items.reduce((s, i) => s + i.quantidade, 0)
  const title = step === 'cart'
    ? `${stepTitles[step]} (${totalItems})`
    : stepTitles[step] || ''

  return (
    <>
      <Overlay $open={isOpen} onClick={() => dispatch(closeCart())}/>
      <Sidebar $open={isOpen}>
        <Header>
          <Title>{title}</Title>
          <CloseBtn onClick={() => dispatch(closeCart())}>✕</CloseBtn>
        </Header>

        {step === 'cart' && <CartItems />}
        {step === 'delivery' && <DeliveryForm />}
        {(step === 'payment' || step === 'confirming') && <PaymentForm />}
        {step === 'done' && <Confirmation />}
      </Sidebar>
    </>
  )
}

export default Cart
