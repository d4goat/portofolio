export default defineAppConfig({
  ui: {
    colors: {
        primary: 'zinc',
        error: 'red',
        secondary: 'blue',
        info: 'sky',
        success: 'green',
        warning: 'yellow',
    },
    badge: {
      slots: {
        base: 'font-medium inline-flex items-center',
        label: 'truncate',
        leadingIcon: 'shrink-0',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailingIcon: 'shrink-0'
      },
      variants: {
        fieldGroup: {
          horizontal: 'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
          vertical: 'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]'
        },
        color: {
          primary: 'zinc',
        error: 'red',
        secondary: 'blue',
        info: 'sky',
        success: 'green',
        warning: 'yellow',
        neutral: 'zinc'
        },
        variant: {
          solid: '',
          outline: '',
          soft: '',
          subtle: ''
        },
        size: {
          xs: {
            base: 'text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm',
            leadingIcon: 'size-3',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-3'
          },
          sm: {
            base: 'text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm',
            leadingIcon: 'size-3',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-3'
          },
          md: {
            base: 'text-xs px-2 py-1 gap-1 rounded-md',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          lg: {
            base: 'text-sm px-2 py-1 gap-1.5 rounded-md',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          xl: {
            base: 'text-base px-2.5 py-1 gap-1.5 rounded-md',
            leadingIcon: 'size-6',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-6'
          }
        },
        square: {
          true: ''
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'bg-primary text-inverted'
        },
        {
          color: 'primary',
          variant: 'outline',
          class: 'text-primary ring ring-inset ring-primary/50'
        },
        {
          color: 'primary',
          variant: 'soft',
          class: 'bg-primary/10 text-primary'
        },
        {
          color: 'primary',
          variant: 'subtle',
          class: 'bg-primary/10 text-primary ring ring-inset ring-primary/25'
        },
        {
          color: 'neutral',
          variant: 'solid',
          class: 'text-neutral-900 bg-neutral-900'
        },
        {
          color: 'neutral',
          variant: 'outline',
          class: 'ring ring-inset ring-neutral-800 text-default bg-default'
        },
        {
          color: 'neutral',
          variant: 'soft',
          class: 'text-default bg-neutral-800'
        },
        {
          color: 'neutral',
          variant: 'subtle',
          class: 'ring ring-inset ring-neutral-800 text-default bg-neutral-800'
        },
        {
          size: 'xs',
          square: true,
          class: 'p-0.5'
        },
        {
          size: 'sm',
          square: true,
          class: 'p-1'
        },
        {
          size: 'md',
          square: true,
          class: 'p-1'
        },
        {
          size: 'lg',
          square: true,
          class: 'p-1'
        },
        {
          size: 'xl',
          square: true,
          class: 'p-1'
        }
      ],
      defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md'
      }
    },
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto sm:px-[2%] lg:px-[5.5%]'
    },
    card: {
      slots: {
        root: 'rounded-lg overflow-hidden',
        header: 'p-4 sm:px-6',
        body: 'p-4 sm:p-6',
        footer: 'p-4 sm:px-6'
      },
      variants: {
        variant: {
          solid: {
            root: 'bg-neutral-900 text-neutral-900'
          },
          outline: {
            root: 'bg-default ring ring-neutral-500 divide-y divide-default',
            header: 'border-neutral-500'
          },
          soft: {
            root: 'bg-neutral-800/50 divide-y divide-default',
            header: 'border-neutral-400'
          },
          subtle: {
            root: 'bg-neutral-800/50 ring ring-neutral-500 divide-y divide-default',
            header: 'border-neutral-500'
          }
        }
      },
      defaultVariants: {
        variant: 'outline'
      }
    }
  },
  tabs: {
      slots: {
        root: 'flex items-center gap-2',
        list: 'relative flex p-1 group',
        indicator: 'absolute transition-[translate,width] duration-200',
        trigger: [
          'group relative inline-flex items-center min-w-0 data-[state=inactive]:text-muted hover:data-[state=inactive]:not-disabled:text-default font-medium rounded-md disabled:cursor-not-allowed disabled:opacity-75',
          'transition-colors'
        ],
        leadingIcon: 'shrink-0',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        label: 'truncate',
        trailingBadge: 'shrink-0',
        trailingBadgeSize: 'sm',
        content: 'focus:outline-none w-full'
      },
      variants: {
        color: {
          primary: 'zinc',
          error: 'red',
          secondary: 'blue',
          info: 'sky',
          success: 'green',
          warning: 'yellow',
          neutral: 'zinc'
        },
        variant: {
          pill: {
            list: 'bg-neutral-900 rounded-lg',
            trigger: 'grow',
            indicator: 'rounded-md shadow-xs'
          },
          link: {
            list: 'border-default',
            indicator: 'rounded-full',
            trigger: 'focus:outline-none'
          }
        },
        orientation: {
          horizontal: {
            root: 'flex-col',
            list: 'w-full',
            indicator: 'left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)',
            trigger: 'justify-center'
          },
          vertical: {
            list: 'flex-col',
            indicator: 'top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)'
          }
        },
        size: {
          xs: {
            trigger: 'px-2 py-1 text-xs gap-1',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs'
          },
          sm: {
            trigger: 'px-2.5 py-1.5 text-xs gap-1.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs'
          },
          md: {
            trigger: 'px-3 py-1.5 text-sm gap-1.5',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs'
          },
          lg: {
            trigger: 'px-3 py-2 text-sm gap-2',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs'
          },
          xl: {
            trigger: 'px-3 py-2 text-base gap-2',
            leadingIcon: 'size-6',
            leadingAvatarSize: 'xs'
          }
        }
      },
      compoundVariants: [
        {
          orientation: 'horizontal',
          variant: 'pill',
          class: {
            indicator: 'inset-y-1'
          }
        },
        {
          orientation: 'horizontal',
          variant: 'link',
          class: {
            list: 'border-b -mb-px',
            indicator: '-bottom-px h-px'
          }
        },
        {
          orientation: 'vertical',
          variant: 'pill',
          class: {
            indicator: 'inset-x-1',
            list: 'items-center'
          }
        },
        {
          orientation: 'vertical',
          variant: 'link',
          class: {
            list: 'border-s -ms-px',
            indicator: '-start-px w-px'
          }
        },
        {
          color: 'primary',
          variant: 'pill',
          class: {
            indicator: 'bg-primary',
            trigger: 'data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
          }
        },
        {
          color: 'neutral',
          variant: 'pill',
          class: {
            indicator: 'bg-inverted',
            trigger: 'data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted'
          }
        },
        {
          color: 'primary',
          variant: 'link',
          class: {
            indicator: 'bg-primary',
            trigger: 'data-[state=active]:text-primary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary'
          }
        },
        {
          color: 'neutral',
          variant: 'link',
          class: {
            indicator: 'bg-inverted',
            trigger: 'data-[state=active]:text-highlighted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted'
          }
        }
      ],
      defaultVariants: {
        color: 'primary',
        variant: 'pill',
        size: 'md'
      }
    }
})
