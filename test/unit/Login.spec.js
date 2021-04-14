import { mount, createLocalVue } from '@vue/test-utils'
import Login from '@/components/Login.vue'
import Btn from '@/components/unauthenticated/form/UnauthButton.vue'
import Vuex from 'vuex'

describe('Login Component', () => {
  let wrapper = null
  let UserStore

  const localVue = createLocalVue()
  localVue.use(Vuex)

  const loginMock = jest.fn((ctx) => Promise.resolve())
  beforeEach(() => {
    UserStore = {
      actions: {
        login: loginMock,
      },
    }
    const store = new Vuex.Store({
      modules: {
        user: UserStore,
      },
      actions: {
        login: loginMock,
      },
    })
    wrapper = mount(Login, {
      localVue,
      store,
      stubs: {
        NuxtLink: true,
        UnauthButton: Btn,
        UnauthInput: true,
        UnauthForm: true,
      },
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('initializes with correct elements', () => {
    // Check that the elements are rendered
    expect(wrapper.findAll('div').length).toEqual(1)
    expect(wrapper.findAll('p').length).toEqual(1)
    expect(wrapper.findAll('form').length).toEqual(1)

    const cForms = wrapper.findComponent({ ref: 'form' })
    expect(cForms.exists()).toBe(true)

    const loginbtn = wrapper.findComponent({ ref: 'loginbtn' })
    expect(loginbtn.exists()).toBe(true)
    expect(loginbtn.text()).toBe('Login')

    const passwordInput = wrapper.findComponent({ ref: 'password-input' })
    expect(passwordInput.exists()).toBe(true)

    const emailInput = wrapper.findComponent({ ref: 'email-input' })
    expect(emailInput.exists()).toBe(true)
  })

  it('It tests a successful Login', () => {
    const form = wrapper.find('form')

    // const context = {
    //   commit: jest.fn(),
    //   dispatch: jest.fn(),
    // }

    // const body = {
    //   email: 'test@example.com',
    //   password: 'password',
    // }

    form.trigger('submit.prevent')

    expect(UserStore.actions.login.mock.calls).toHaveBeenCalled()

    // const errorText = wrapper.find('.error')
    // expect(clickHandler.called).toBe(true)
    // expect(errorText.text()).toBe('Password/email combination is incorrect')
  })
})
