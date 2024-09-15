<script setup lang="ts">
const programs = [
  { title: 'AWS bug bounty', company: 'Amazon', assets: [{ count: 11, type: 'wildcard' }, { count: 2, type: 'android' }, { count: 1, type: 'ios' }], logo: 'https://imgs.search.brave.com/T5LGtSBmdglkozcbQBjBwN2YquDpSFYVew0f6DMdwUs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92aXN1/YWxoaWVyYXJjaHku/Y28vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDQvYW1hem9u/LmpwZw' },
  { title: 'Google bug bounty', company: 'Google', assets: [{ count: 40, type: 'wildcard' }], logo: 'https://imgs.search.brave.com/OO9ao7-fkymhkEsDAHsYBCQkhhEenqNphN3I2lUK9nw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9leHBy/ZXNzd3JpdGVycy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMDkvZ29vZ2xl/LW5ldy1sb2dvLTQ1/MHg0NTAuanBn' },
  { title: 'Apple bug bounty', company: 'Apple', assets: [{ count: 5, type: 'wildcard' }, { count: 8, type: 'ios' }], logo: 'https://imgs.search.brave.com/D4LDDvK4LBh43jeuVQO9xWvRnurWBF2BmkDYRxM0CvI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdWJz/dGFja2Nkbi5jb20v/aW1hZ2UvZmV0Y2gv/d18xNDU2LGNfbGlt/aXQsZl9hdXRvLHFf/YXV0bzpnb29kLGZs/X3Byb2dyZXNzaXZl/OnN0ZWVwL2h0dHBz/Oi8vc3Vic3RhY2st/cG9zdC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL3B1YmxpYy9p/bWFnZXMvOGVkM2Q1/NDctOTRmZi00OGUx/LTlmMjAtOGMxNGE3/MDMwYTAyXzIwMDB4/MjAwMC5qcGVn' },
  { title: 'Linode bug bounty', company: 'Linode', assets: [{ count: 18, type: 'wildcard' }], logo: 'https://imgs.search.brave.com/s4ZWobIr0CtDb4FV1-13C88tEjMxS9SJuogRKhtN0hM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9saW5vZGUuc3Zn' },
  { title: 'Snapp bug bounty', company: 'Snapp', assets: [{ count: 3, type: 'wildcard' }, { count: 2, type: 'android' }, { count: 2, type: 'ios' }], logo: 'https://imgs.search.brave.com/-RU9n0VRg-klXtnW_zgRm0WjN-TMROO6F-6i1jvWfcE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQxL1NuYXBwIV9s/b2dvXyhFbmdsaXNo/KS5zdmc' },
  { title: 'Digikala bug bounty', company: 'Digikala', assets: [{ count: 25, type: 'wildcard' }, { count: 4, type: 'android' }, { count: 3, type: 'ios' }], logo: 'https://imgs.search.brave.com/IzB86E_QIIuFBJxY97xqlbIqYJ3qWQ5AEofUlbdK-KU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzhlL0RpZ2lrYWxh/X2xvZ29fKGVuKS5z/dmc' },
]
</script>

<template>
  <VCard :title="$t('programs')">
    <VCardText>
      <VRow>
        <template
          v-for="program in programs"
          :key="program"
        >
          <VCol
            cols="3"
            align-self="stretch"
          >
            <ProgramCard
              :id="1"
              :title="program.title"
              :company="program.company"
              :assets="program.assets"
              :logo="program.logo"
            />
          </VCol>
        </template>
      </VRow>
    </VCardText>
  </VCard>
</template>
