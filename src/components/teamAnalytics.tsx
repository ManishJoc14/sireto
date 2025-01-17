import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export function TeamAnalytics({ analysisResult }: { analysisResult: string }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Team Insights</CardTitle>
            </CardHeader>
            <CardContent>
                {analysisResult ? (
                    <p className="whitespace-pre-wrap">{analysisResult}</p>
                ) : (
                    <p>Click {`"Analyze Team"`} to generate insights.</p>
                )}
            </CardContent>
        </Card>
    )
}

