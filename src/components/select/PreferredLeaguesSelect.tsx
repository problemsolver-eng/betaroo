import React, { useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { appImages } from '../../assets';
import { colors, radii, spacing, typography } from '../../tokens';

type PreferredLeaguesSelectProps = {
  options: string[];
  mode?: 'interactive' | 'default' | 'focus' | 'filled';
  filledCount?: number;
};

type DropdownMenuItemProps = {
  active: boolean;
  disabled: boolean;
  label: string;
  onPress: () => void;
};

function DropdownMenuItem({
  active,
  disabled,
  label,
  onPress,
}: DropdownMenuItemProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.option, active && styles.optionActive]}
      disabled={disabled}>
      <Image
        source={appImages.global}
        style={styles.optionGlyphIcon}
      />
      <Text style={[styles.optionText, active && styles.optionTextActive]}>{label}</Text>
    </Pressable>
  );
}

export function PreferredLeaguesSelect({
  options,
  mode = 'interactive',
  filledCount = 3,
}: PreferredLeaguesSelectProps) {
  const [isOpen, setIsOpen] = useState(mode === 'focus');
  const [selected, setSelected] = useState<string[]>(
    mode === 'filled' ? options.slice(0, filledCount) : [],
  );
  const animation = useRef(new Animated.Value(0)).current;
  const countFade = useRef(new Animated.Value(selected.length > 0 ? 1 : 0)).current;
  const optionsScrollRef = useRef<ScrollView>(null);

  const isPreview = mode !== 'interactive';
  const visibleOpen = mode === 'focus' ? true : isOpen;
  const visibleSelectedCount = mode === 'filled' ? filledCount : selected.length;

  const toggleOpen = () => {
    if (isPreview) return;
    const toValue = isOpen ? 0 : 1;
    setIsOpen(!isOpen);
    Animated.timing(animation, {
      toValue,
      duration: 180,
      easing: Easing.bezier(0.2, 0.8, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: visibleOpen ? 1 : 0,
      duration: 180,
      easing: Easing.bezier(0.2, 0.8, 0.2, 1),
      useNativeDriver: false,
    }).start();
  }, [animation, visibleOpen]);

  React.useEffect(() => {
    Animated.timing(countFade, {
      toValue: visibleSelectedCount > 0 ? 1 : 0.72,
      duration: 180,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [countFade, visibleSelectedCount]);

  React.useEffect(() => {
    if (!visibleOpen) return;
    const retries = [0, 80, 180, 300];
    const timers = retries.map(delay =>
      setTimeout(() => {
        optionsScrollRef.current?.scrollTo({ x: 0, y: 9999, animated: true });
        optionsScrollRef.current?.scrollToEnd({ animated: true });
      }, delay),
    );
    return () => timers.forEach(clearTimeout);
  }, [visibleOpen]);

  const dropdownHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, options.length * 36 + 8],
  });

  const dropdownOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.25, 1],
  });

  const onToggleOption = (option: string) => {
    if (isPreview) return;
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option].sort(),
    );
  };

  const scrollDropdownToBottom = () => {
    requestAnimationFrame(() => {
      optionsScrollRef.current?.scrollTo({ x: 0, y: 9999, animated: true });
      optionsScrollRef.current?.scrollToEnd({ animated: true });
    });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.caption}>
        Preferred Leagues <Text style={styles.required}>*</Text>
      </Text>
      <Pressable
        onPress={toggleOpen}
        style={[styles.input, visibleOpen && styles.inputFocused]}
        disabled={isPreview}>
        <Image
          source={appImages.leagues}
          style={styles.leftGlyphIcon}
        />
        <Animated.Text style={[styles.inputText, visibleSelectedCount === 0 && styles.placeholder, { opacity: countFade }]}>
          {visibleSelectedCount === 0
            ? '0 Leagues Selected'
            : `${visibleSelectedCount} Leagues Selected`}
        </Animated.Text>
        <Image
          source={appImages.arrowUp}
          style={[styles.chevronIcon, !visibleOpen && styles.chevronIconClosed]}
        />
      </Pressable>

      <Animated.View
        pointerEvents={visibleOpen ? 'auto' : 'none'}
        style={[
          styles.dropdown,
          visibleOpen ? styles.dropdownOpen : styles.dropdownClosed,
          { height: dropdownHeight, opacity: dropdownOpacity },
        ]}>
        <ScrollView
          ref={optionsScrollRef}
          bounces={false}
          nestedScrollEnabled
          onContentSizeChange={() => {
            if (visibleOpen) {
              scrollDropdownToBottom();
            }
          }}
          onLayout={() => {
            if (visibleOpen) {
              scrollDropdownToBottom();
            }
          }}
          showsVerticalScrollIndicator={false}>
          {options.map(option => {
            const active = mode === 'filled' ? options.slice(0, filledCount).includes(option) : selected.includes(option);
            return (
              <DropdownMenuItem
                key={option}
                onPress={() => onToggleOption(option)}
                label={option}
                active={active}
                disabled={isPreview}
              />
            );
          })}
        </ScrollView>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  caption: {
    fontSize: 12,
    fontVariant: ['lining-nums', 'tabular-nums'],
    fontWeight: '500',
    letterSpacing: -0.1,
    lineHeight: 16,
    color: colors.text.muted,
    marginBottom: spacing.xs + 2,
    opacity: 0.92,
  },
  required: {
    color: colors.accent.warning,
  },
  input: {
    alignItems: 'center',
    backgroundColor: colors.background.card,
    borderColor: colors.background.border,
    borderRadius: radii.input,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 36,
    paddingHorizontal: spacing.sm + 2,
  },
  inputFocused: {
    borderColor: colors.text.primary,
    shadowColor: colors.text.primary,
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  leftGlyphIcon: {
    height: 14,
    marginRight: spacing.sm - 2,
    opacity: 0.8,
    width: 14,
  },
  inputText: {
    ...typography.bodySm,
    color: colors.text.primary,
    flex: 1,
  },
  placeholder: {
    color: colors.text.secondary,
  },
  chevronIcon: {
    height: 14,
    opacity: 0.9,
    width: 14,
  },
  chevronIconClosed: {
    transform: [{ rotate: '180deg' }],
  },
  dropdown: {
    backgroundColor: '#171717',
    borderColor: '#262626',
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
  },
  dropdownOpen: {
    borderWidth: 1,
    marginTop: 6,
    padding: spacing.xs,
  },
  dropdownClosed: {
    borderWidth: 0,
    marginTop: 0,
    padding: 0,
  },
  option: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#171717',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
    height: 36,
    paddingHorizontal: 8,
  },
  optionActive: {
    backgroundColor: '#1C1C1C',
    borderRadius: 6,
    width: '100%',
  },
  optionGlyphIcon: {
    height: 14,
    marginRight: spacing.sm - 2,
    opacity: 0.8,
    width: 14,
  },
  optionText: {
    ...typography.bodySm,
    color: colors.text.secondary,
  },
  optionTextActive: {
    color: colors.text.primary,
  },
  stateHint: {
    ...typography.overline,
    color: colors.text.muted,
    marginTop: spacing.xs + 2,
  },
});
