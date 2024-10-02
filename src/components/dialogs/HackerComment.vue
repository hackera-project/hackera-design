<template>
  <VCard :title="$t('review-company')">
    <VCardText>
      <AppTextarea :label="$t('your-comment')" />
      <div class="d-flex align-center ga-2 mt-4">
        <div>
          {{ $t('your-score-to-company') }}:
        </div>
        <VRating
          hover
          :length="5"
        />
      </div>
    </VCardText>
    <VCardText class="d-flex justify-end">
      <VBtn>
        {{ $t('save') }}
      </VBtn>
    </VCardText>
  </VCard>
</template>
