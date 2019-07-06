import React from "react";
import { ISlideGridTuning } from "@pyrogenic/slide-grid/lib/SlideGrid";
import Form from "react-bootstrap/Form";

export default class SlideGridTuningComponent extends React.Component<{ tuning: ISlideGridTuning, change(tuning: Partial<ISlideGridTuning>): void }> {
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
                <Form.Check value={tuning.motionOnRails.toString()}
                    onChange={(event: any) => this.props.change({ motionOnRails: !tuning.motionOnRails })}/>
            </Form.Group>
            <ul>
                    {Object.getOwnPropertyNames(tuning).map((prop) =>
                        <li>{prop}: {`${tuning[prop as keyof ISlideGridTuning]}`}</li>
                    )}
                </ul>
        </Form>;
        }
}