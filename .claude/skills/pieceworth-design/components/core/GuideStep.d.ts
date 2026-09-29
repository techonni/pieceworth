import * as React from 'react';
/** Numbered guide step: muted "01" + serif title, body paragraphs, optional StoreLink child. */
export interface GuideStepProps { index?: number; title: string; paragraphs?: string[]; children?: React.ReactNode; }
export function GuideStep(props: GuideStepProps): JSX.Element;
