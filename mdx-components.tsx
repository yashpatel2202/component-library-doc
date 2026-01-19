import type { MDXComponents } from 'mdx/types'
import { Steps, Step } from '@/components/mintlify/Steps';
import { PageHeader } from '@/components/mintlify/PageHeader';
import { Card, CardGroup } from '@/components/mintlify/Card';
import { Callout, InfoCallout, WarningCallout, TipCallout, ErrorCallout, CheckCallout, NoteCallout } from '@/components/mintlify/Callout';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    PageHeader,
    Steps,
    Step,
    Card,
    CardGroup,
    Columns: CardGroup,
    Callout,
    Info: InfoCallout,
    Warning: WarningCallout,
    Tip: TipCallout,
    Error: ErrorCallout,
    Check: CheckCallout,
    Note: NoteCallout,
  }
}
