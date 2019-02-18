import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Service from '../Service'

class Services extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        textItems: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }

  state = {
    serviceInView: 0,
  }

  switchService = (id) => {
    this.setState((prevState) => ({
      serviceInView: id,
    }))
  }

  render () {
    const { data } = this.props
    const { serviceInView } = this.state

    return (
      <div className='section'>
        {data.map((s, i) => (
          <Service
            title={s.title}
            textItems={s.textItems}
            isOpen={i === serviceInView}
            viewService={(isOpen) => {
              if (!isOpen) {
                this.switchService(i)
              } else {
                this.switchService(-1)
              }
            }}
          />
        ))}
      </div>
    )
  }
}

export default Services
