import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { NaviLink } from "./nav-link"
import { MemoryRouter } from "react-router-dom"

describe('NavLink', () => {
    it('should highlight the nav link when is the current page link', () => {
        const wrapper = render(
        
        <>
            <NaviLink to='/'>Home</NaviLink>
            <NaviLink to='/about'>About</NaviLink>
        </>, 
        {
            wrapper: ({ children }) => {
                return (
                    <MemoryRouter initialEntries={['/about']}>
                        { children }
                    </MemoryRouter>
                )
            }
        })

        expect(wrapper.getByText('Home').dataset.current).toBe('false')
        expect(wrapper.getByText('About').dataset.current).toBe('true')
    })
})