import { getTestFixturesAsync } from 'test/test-utils'
import { beforeAll, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import humanizeString from 'humanize-string'
import type { WorksType } from '@/types'
import { Works } from '@/components/pages'

describe('<Works />', () => {
  let container: HTMLElement
  let works: WorksType
  beforeAll(async () => {
    works = await getTestFixturesAsync('works')
    const render$ = await render(<Works data={works} />)
    container = render$.container
  })
  it('should validate work title', async () => {
    const ksTitle = screen.getByTestId('work_title')
    expect(ksTitle.textContent).toBe('Work Experience')
  })
  it('should validate work list', async () => {
    expect(
      container.querySelector('[data-testid="work_list"] > div'),
    ).toBeDefined()
  })
  describe('should validate work details', async () => {
    const works: WorksType = await getTestFixturesAsync('works')

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
        expect(ele?.textContent).toBe(w.description)
      })
      it('should validate skill title', () => {
        const ele = container.querySelector(
          `[data-testid="work_skills_index_${index}"] > div:nth-child(1)`,
        )
        expect(ele?.textContent).toBe('Skills: ')
      })
      it('should validate skills tech stacks', () => {
        w.techStacks
        && w.techStacks.forEach((_, i) => {
          const ele = container.querySelector(
              `[data-testid="work_skills_index_${index}"] > div:nth-child(${i + 2})`,
          )
          expect(ele?.textContent).toContain(humanizeString(w.techStacks[i]))
        })
      })
    })
  })
})
