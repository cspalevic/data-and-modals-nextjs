import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export type LaunchCardProps = {
    name: string;
    description: string;
}

export const LaunchCard = ({ name, description }: LaunchCardProps) => (
    <Card className="w-[350px]">
        <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
    </Card>
)