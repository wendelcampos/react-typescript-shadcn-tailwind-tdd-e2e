import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { OrderStatus } from './order-status'
import '@testing-library/jest-dom' 

describe('Order Status', () => {
    it('should display the right text base on order status', () => {
        const wrapper = render(<OrderStatus status='pending'/>)

        wrapper.debug()

        const statusText = wrapper.getByText('Pendente')

        expect(statusText).toBeInTheDocument()
    })
}) 