import type { WorksType } from '@/types'
import { Works } from '@/components/pages/works'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { beforeAll, describe, expect, it } from 'vitest'
import { works as workFixture } from '../../../fixtures/data'

describe('<Works />', () => {
  let container: HTMLElement
  const works: WorksType = workFixture
  beforeAll(async () => {
    const render$ = await render(<Works data={works} />)
    container = render$.container
  })
  it('should validate work title', async () => {
    const title = screen.getByTestId('work_title')
    expect(title.textContent?.toLowerCase()).toBe('work experience')
  })
  it('should validate work list', async () => {
    expect(
      container.querySelector('[data-testid="work_list"] > div'),
    ).toBeDefined()
  })
  describe('should validate work details', async () => {
    const works: WorksType = workFixture

    works.forEach((w, index) => {
      it('should validate company link', () => {
        expect(
          container.querySelector(
            `[data-testid="work_details_index_${index}"] > a`,
          ),
        ).toBeDefined()
        expect(
          container
            .querySelector(
              `[data-testid="work_details_index_${index}"] > div > a`,
            )
            ?.getAttribute('href'),
        ).toBe(w.link)
      })
      it('should validate company name', () => {
        const ele = container.querySelector(
          `[data-testid="work_details_index_${index}"] > div > a`,
        )
        expect(ele?.textContent).toBe(w.company)
      })
      it('should validate working mode', () => {
        const ele = container.querySelector(
          `[data-testid="work_details_index_${index}"] > div > span`,
        )
        expect(ele?.textContent).toBe(w.mode.join(''))
      })
      it('should validate working tenure', () => {
        const ele = container.querySelector(
          `[data-testid="work_details_index_${index}"] > div:nth-child(2)`,
        )
        expect(ele?.textContent).toBe(`${w.start} - ${w.end ?? 'Present'}`)
      })
      it('should validate working position', () => {
        const ele = container.querySelector(
          `[data-testid="work_description_index_${index}"]`,
        )
        expect(ele?.textContent).toBe(w.description.replaceAll('<br/>', ''))
      })
      it('should validate technology title', () => {
        const ele = container.querySelector(
          `[data-testid="work_technology_index_${index}"] > div:nth-child(1)`,
        )
        expect(ele?.textContent).toBe('Technology: ')
      })
      it('should validate technology items', () => {
        w.techStacks
        && w.techStacks.forEach((_, i) => {
          const ele = container.querySelector(
            `[data-testid="work_technology_index_${index}"] > div:nth-child(${i + 2})`,
          )
          expect(ele?.textContent).toBeDefined()
        })
      })
    })
  })
})
