import { ISlideGridTuning } from "@pyrogenic/slide-grid/lib/SlideGrid";
import React from "react";
import Form from "react-bootstrap/Form";

export default class SlideGridTuningComponent extends React.Component<{ tuning: ISlideGridTuning, change(tuning: Partial<ISlideGridTuning>): void }> {
    public componentDidMount() {
        const tuning = sessionStorage.getItem("SlideGridTuning");
        if (tuning) {
            this.props.change(JSON.parse(tuning as any));
        }
    }

    public componentDidUpdate() {
        sessionStorage.setItem("SlideGridTuning", JSON.stringify(this.props.tuning));
    }

    public render() {
        const { tuning } = this.props;
        return <Form>
            <Form.Group>
                <Form.Label>Drag Start Distance</Form.Label>
                <Form.Control type="number" value={tuning.dragStartDistanceSquared.toString()}
                    onChange={(event: any) => this.props.change({ dragStartDistanceSquared: event.target.value })}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Motion on Rails</Form.Label>
                <Form.Check checked={tuning.motionOnRails}
                    onChange={(event: any) => this.props.change({ motionOnRails: !tuning.motionOnRails })}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>keepDragInBounds</Form.Label>
                <Form.Check checked={tuning.keepDragInBounds}
                    onChange={(event: any) => this.props.change({ keepDragInBounds: !tuning.keepDragInBounds })}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>ignoreDragOutOfBounds</Form.Label>
                <Form.Check checked={tuning.ignoreDragOutOfBounds}
                    onChange={(event: any) => this.props.change({ ignoreDragOutOfBounds: !tuning.ignoreDragOutOfBounds })}/>
            </Form.Group>
            <ul>
                    {Object.getOwnPropertyNames(tuning).map((prop) =>
                        <li key={prop}>{prop}: {`${tuning[prop as keyof ISlideGridTuning]}`}</li>
                    )}
                </ul>
        </Form>;
        }
}
