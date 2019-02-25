export class DiagramContent
{
    nodes :DiagramNode[] = [];
    vertices :DiagramVertice[] = [];
}

export class DiagramElement
{
    color :string;
    label :string;
    id :string;
}

export enum DiagramNodeShape
{
    CIRCLE = "circle",
    SQUARE = 'square',
    DIAMOND = 'diamond'
}

export enum DiagramVerticeStyle
{
    DASHED = 'dashed',
    SOLID = 'solid'
}


export class DiagramNode extends DiagramElement
{
    shape :DiagramNodeShape;
    position: {
        x :number,
        y: number
    };
    textStyle :String = "normal";
    textSize :number = 18;
    additionalCSS :any;
}

export class DiagramVertice extends DiagramElement
{
    style :string;
    fromId :string;
    toId :string;
}