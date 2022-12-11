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
            <Form.Check
                label="Motion on Rails"
                checked={tuning.motionOnRails}
                onChange={(event: any) => this.props.change({ motionOnRails: !tuning.motionOnRails })} />
            <Form.Check
                label="Keep Drag In-Bounds"
                checked={tuning.keepDragInBounds}
                onChange={(event: any) => this.props.change({ keepDragInBounds: !tuning.keepDragInBounds })} />
            <Form.Check
                label="Ignore Drag Out-of-Bounds"
                checked={tuning.ignoreDragOutOfBounds}
                onChange={(event: any) => this.props.change({ ignoreDragOutOfBounds: !tuning.ignoreDragOutOfBounds })} />
            <Form.Group>
                <Form.Label></Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>Drag Start Distance</Form.Label>
                <Form.Control
                    type="number"
                    value={Math.sqrt(tuning.dragStartDistanceSquared)}
                    onChange={(e) => this.props.change({ dragStartDistanceSquared: valueSquared(e) })}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Smear Distance (min)</Form.Label>
                <Form.Control
                    type="number"
                    value={Math.sqrt(tuning.smearDistanceSquaredMin)}
                    onChange={(e) => this.props.change({ smearDistanceSquaredMin: valueSquared(e) })}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Smear Distance (max)</Form.Label>
                <Form.Control
                    type="number"
                    value={Math.sqrt(tuning.smearDistanceSquaredMax)}
                    onChange={(e) => this.props.change({ smearDistanceSquaredMax: valueSquared(e) })}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Slide Duration (ms)</Form.Label>
                <Form.Control
                    type="number"
                    value={tuning.slideDurationMS}
                    onChange={(e) => this.props.change({ slideDurationMS: valueAs<number>(e) })}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Long Press Duration (ms)</Form.Label>
                <Form.Control
                    type="number"
                    value={tuning.longPressDurationMS}
                    onChange={(e) => this.props.change({ longPressDurationMS: valueAs<number>(e) })}
                />
            </Form.Group>
            <code>
                <pre>
                    {JSON.stringify(tuning, null, 2)}
                </pre>
            </code>
        </Form>;
    }
}

function valueSquared(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    return (e.target.value as unknown as number) * (e.target.value as unknown as number);
}

function valueAs<T>(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    return (e.target.value as unknown as T);
}

