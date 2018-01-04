import * as React from "react";

export interface ISuggestionProps {
  suggestion: string;
  onSelected: (q: string) => void;
}

export class Suggestion extends React.Component<ISuggestionProps, {}> {
  constructor(props: ISuggestionProps) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  public onClick(event: any): void {
    event.preventDefault();

    this.props.onSelected(this.props.suggestion);
  }

  public render(): JSX.Element {
    const { suggestion } = this.props;

    return (
      <a href="javascript:void(0)" onClick={this.onClick}>
        {suggestion}
      </a>
    );
  }
}
