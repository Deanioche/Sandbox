/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   get_next_line_utils.c                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/01/31 16:31:01 by jaewonki          #+#    #+#             */
/*   Updated: 2022/02/14 17:27:08 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "get_next_line.h"

size_t	ft_strlen(const char *s)
{
	size_t	len;

	len = 0;
	while (*s)
	{
		len++;
		s++;
	}
	return (len);
}

size_t	ft_strlcpy(char *dst, const char *src, size_t dstsize)
{
	size_t	i;
	size_t	srcLen;

	i = 0;
	srcLen = ft_strlen(src);
	if (!dstsize)
		return (srcLen);
	while (src[i] && i < (dstsize - 1))
	{
		dst[i] = src[i];
		i++;
	}
	dst[i] = 0;
	return (srcLen);
}

char	*ft_strchr(const char *s, int c)
{
	while (*s)
	{
		if (*s == (char)c)
			return ((char *)s);
		s++;
	}
	if (*s == (char)c)
		return ((char *)s);
	return (0);
}

char	*ft_strdup(const char *s1)
{
	size_t	s1Len;
	char	*ret;
	char	*tmp;

	s1Len = ft_strlen(s1);
	ret = (char *)malloc(sizeof(char) * (s1Len + 1));
	if (!ret)
		return (0);
	tmp = ret;
	while (s1Len--)
	{
		*tmp = *s1;
		tmp++;
		s1++;
	}
	*tmp = 0;
	return (ret);
}

char	*ft_strjoin(char const *s1, char const *s2)
{
	char	*ret;
	size_t	s1Len;
	size_t	s2Len;

	if (!s1 && !s2)
		return (0);
	else if (!s1)
		return (ft_strdup(s2));
	else if (!s2)
		return (ft_strdup(s1));
	s1Len = ft_strlen(s1);
	s2Len = ft_strlen(s2);
	ret = (char *)malloc(sizeof(char) * (s1Len + s2Len + 1));
	if (!ret)
		return (0);
	ft_strlcpy(ret, s1, s1Len + 1);
	ft_strlcpy(ret + s1Len, s2, s2Len + 1);
	return (ret);
}