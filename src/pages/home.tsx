import * as React from "react"

export interface HomeProps {
  name: string
  company: string
}

export class Home extends React.Component<HomeProps, {}> {
  render() {
    return (
      <h1>
        Hello, I am {this.props.name}, I in {this.props.company} now!
      </h1>
    )
  }
}