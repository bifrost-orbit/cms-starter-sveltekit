import type { Component } from 'svelte'
import type { CmsComponent } from '@bifrost-orbit-cms/sdk'
import Action from './Action.svelte'
import FeatureGrid from './FeatureGrid.svelte'
import FeatureItem from './FeatureItem.svelte'
import Hero from './Hero.svelte'

export type BlockProps = { block: CmsComponent }

export const registry: Record<string, Component<BlockProps>> = {
  hero: Hero,
  featureGrid: FeatureGrid,
  featureItem: FeatureItem,
  action: Action,
}
